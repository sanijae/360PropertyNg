const Admin = require("../db/Admin")
const Blog = require("../db/Blog")

exports.createBlogPost =async(req,res)=>{
    const authorId = req.params.id
    try {
         const author = await Admin.findById(authorId)
         if(author){
             const blog = await Blog.create({...req.body,createdBy:authorId})
             res.json({result:blog})
         }
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getAllBlogPost =async(req,res)=>{
    try {
        const posts = await Blog.find().lean().populate('createdBy')
        res.json({result:posts})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getBlogPost =async(req,res)=>{
    try {
        const posts = await Blog.findById(req.params.id).populate('createdBy')
        res.json({result:posts})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.deleteBlogPost =async(req,res)=>{
    try {
        const posts = await Blog.findByIdAndDelete(req.params.id)
        res.json({result:posts})
    } catch (error) {
        res.json({error:error.message})
    }
}