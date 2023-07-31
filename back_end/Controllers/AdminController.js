
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../db/Admin')
 

exports.registerAdmin = async(req,res)=>{
   try {
       let user = await Admin.findOne({email:req.body.email})
    if(user){
        res.json({error:'User with this email already exist'})
    }else{
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hashSync(req.body.password,salt)
        const newAdmin = await Admin.create({...req.body,name:`${req.body.firstname} ${req.body.lastname}`,password:hashPass})
        const token = jwt.sign({id:newAdmin._id,email:newAdmin.email},'1zimo2app3')
        res.json({result:newAdmin,token})
    }
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.loginAdmin = async(req,res)=>{
    try {
        const admin = await Admin.findOne({email:req.body.email})
        if(!admin){
            res.json({error:'user with '+ req.body.email +' email not found'})
        }else{
            const pass = await bcrypt.compareSync(req.body.password,admin.password)
            if(!pass){
                res.json({error:'Incorrect password'})
            }else{
                const token = jwt.sign({id:admin._id,email:admin.email},'1zimo2app3')
                res.json({result:admin,token})
            }
        }
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getAdmin = async(req,res)=>{
    try {
        const admin = await Admin.findById(req.params.id).populate('blogPost')
        res.json({result:admin})
    } catch (error) {
        res.json({error:error.message})
    }
}


exports.getAdmins = async(req,res)=>{
    try {
        const admin = await Admin.find().sort({createdAt:-1}).lean().populate('blogPost')
        const adminCount = await Admin.countDocuments()
        res.json({count:adminCount,result:admin})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.updatePassword = async(req,res)=>{
try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password,salt)
    const admin = await Admin.findByIdAndUpdate(req.params.id,{password:hash},{new:true})
    res.json({result:admin})
} catch (error) {
    res.json({error:error.message})
}
}
exports.updateAdmin = async(req,res)=>{
 try {
     const admin = await Admin.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
     res.json({result:admin})
 } catch (error) {
    res.json({error:error.message})
 }
}
exports.deleteAdmin = async(req,res)=>{
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id)
        res.json({result:admin})
    } catch (error) {
        res.json({error:error.message})
    }
}