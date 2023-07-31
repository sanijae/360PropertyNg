const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../db/User')

exports.register = async(req,res)=>{
   try {
       let user = await User.findOne({email:req.body.email})
    if(user){
        res.json({error:'User with this email already exist'})
    }else{
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hashSync(req.body.password,salt)
        const newUser = await User.create({...req.body,name:`${req.body.firstname} ${req.body.lastname}`,password:hashPass})
        const token = jwt.sign({id:newUser._id,email:newUser.email},'1zimo2app3')
        res.json({result:newUser,token})
    }
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.login = async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.json({error:'user with '+ req.body.email +' email not found'})
        }else{
            const pass = await bcrypt.compareSync(req.body.password,user.password)
            if(!pass){
                res.json({error:'Incorrect password'})
            }else{
                const token = jwt.sign({id:user._id,email:user.email},'1zimo2app3')
                res.json({result:user,token})
            }
        }
    } catch (error) {
        res.json({error:error})
    }
}

exports.getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).populate('posts').sort({createdAt:-1})
        res.json({result:user})
    } catch (error) {
        res.json({error:error})
    }
}


exports.getUsers = async(req,res)=>{
    try {
        const user = await User.find().sort({createdAt:-1}).lean().populate('posts')
        const userCount = await User.countDocuments()
        //console.log(user)
        res.json({count:userCount,result:user})
    } catch (error) {
        res.json({error:error})
    }
}
exports.updateName = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{name:`${req.body.firstname} ${req.body.lastname}`},{new:true})
        res.json({result:user})
    } catch (error) {
        res.json({error:error})
    }
   }
   exports.updatePhone = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{phone:req.body.phone},{new:true})
        res.json({result:user})
    } catch (error) {
        res.json({error:error})
    }
   }
   exports.updatePassword = async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password,salt)
        const user = await User.findByIdAndUpdate(req.params.id,{password:hash},{new:true})
        res.json({result:user})
    } catch (error) {
        res.json({error:error})
    }
   }
exports.updateUser = async(req,res)=>{
 try {
     const user = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
     res.json({result:user})
 } catch (error) {
     res.json({error:error})
 }
}
exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json({result:user})
    } catch (error) {
        res.json({error:error})
    }
}