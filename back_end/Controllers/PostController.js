const Post = require('../db/Post')
const User = require('../db/User')
const fs = require('fs')
const path = require('path')

exports.CreatePost=async(req,res)=>{
 try {
     const userId = req.params.userId
     const user = User.findById(userId)
     if(user){
         const newPost = await Post.create({...req.body,hostedBy:userId})
         await User.findByIdAndUpdate(userId,{$push:{posts:newPost._id}},{new:true})
         res.json({result:newPost})
     }else{
         res.json({error:'No User Found'})
     }
     
 } catch (error) {
     res.json({error:error.message})
     console.log(error);
 }
}
exports.getPost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.postId).populate('hostedBy')
        res.json({result:post})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.deletePost = async(req,res)=>{
    const ids = req.params.id
    try {
        const post = await Post.findByIdAndDelete(ids)
        .populate('hostedBy')
        fs.rmdirSync(path.join(__dirname,`../Images/${ids}`),{recursive:true})
        await post.hostedBy.posts.pull(post)
        await post.hostedBy.save()
        res.json({result:post})
    } catch (error) { 
        res.json({error:error.message})
    }
}
exports.updatePost = async(req,res)=>{
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.json({result:post})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getPosts = async(req,res)=>{
    const {page} = req.query
    if(page){
        try {
            const limits = 6
            const startIndex = (Number(page)-1) * limits 
            const total = await Post.countDocuments({})
            const posts = await Post.find().sort({$natural:-1})
            .limit(limits).skip(startIndex)

            res.json({result:posts,currentPage:Number(page),totalPages:Math.ceil(total/limits)})
        } catch (error) {
            res.json({error:error.message})
        }
    }else{
        try {
            const posts = await Post.find().lean()
            const counts = await Post.countDocuments()
            res.json({result:posts,count:counts})
        } catch (error) {
            res.json({error:error})
        } 
    }
}
exports.getPostBySearch = async(req,res)=>{
    const {type,city,rooms,price,minPrice,maxPrice} = req.query
    try {
        const typeItem = new RegExp(type,'i')
        const cityItem = new RegExp(city,'i')
        const post = await Post.find({ $and :[{$or:[
            {type:typeItem},{city:cityItem},{rooms:rooms},{price:price},{minPrice:minPrice},{maxPrice:maxPrice}]}]}) 
            .sort({$natural:-1})
        if(post){
            res.json({result:post})
        }else{  
            res.json('No Post found')
        }        
    } catch (error) {                   
        res.json({error:error.message})
    }
}
exports.getPostByCategory = async(req,res)=>{   
    try {
        const category = req.params.category
        const limits = 8
        const {page} = req.query
        const startIndex = (Number(page)-1) * limits
        const total = await Post.countDocuments()
        const cat = new RegExp(category,'i')
        const post = await Post.find({category:cat})
        .limit(limits).skip(startIndex)
        .sort({$natural:-1}).lean()
        if(post){
            res.json({result:post,totalPages:Math.ceil(total/limits)})
        }else{
            res.json('No Post found')
        }        
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getPostByType = async(req,res)=>{   
    try {
        const types = req.params.type
        const limits = 8
        const {page} = req.query
        const startIndex = (Number(page)-1) * limits
        const total = await Post.countDocuments()
        const type = new RegExp(types,'i')
        const post = await Post.find({type:type})
        .limit(limits).skip(startIndex)
        .sort({$natural:-1}).lean()
        if(post){
            res.json({result:post,totalPages:Math.ceil(total/limits)})
        }else{
            res.json('No Post found')
        }        
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getPostByCity = async(req,res)=>{
    try {
        const city = req.params.name
        const post = await Post.find({city})
        if(post){
            res.json({result:post})
        }else{
            res.json('No Post found')
        }        
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.userPosts = async(req,res)=>{
    try {
        const userPost = await Post.findById(req.params.userId).populate('posts')
        res.json({result:userPost})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.AddImages = async(req,res)=>{
    const fileArray = []
    const pictures = req.files
     if(pictures){
        pictures.forEach(element => {
            const file = {
               picture:element.originalname
            }
            fileArray.push(file)
        }); 
    }else{
        return fileArray
    } 
    try {
        const image = await Post.findByIdAndUpdate(req.params.postId,
            {photos:fileArray},{new:true})
        res.json({msg:'Images Added',image})
    } catch (error) {
        res.json(error)
    }
}