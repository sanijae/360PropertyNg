const Contact = require("../db/Contact")
const User = require("../db/User")

exports.addContact =async(req,res)=>{
      const senderId = req.params.id
    try {
        const sender = await User.findById(senderId)
      if(sender){
        const newContact = await Contact.create(req.params.id,{...req.body,sendBy:senderId})
        res.json({result:newContact})
      }else{
          res.json({error:'Please make you register in platform before you send us message from here'})
      }
    } catch (error) {
        res.json({error:error})
    }
}
exports.updateContact =async(req,res)=>{
    const senderId = req.params.id
    const {title,content,replyBy} = req.body.reply
  try {
      const sender = await User.findById(senderId)
    if(sender){
      const newContact = await Contact.findByIdAndUpdate(req.params.id,{reply:{...req.body}})
      res.json({result:newContact})
    }else{
        res.json({error:'Please make you register in platform before you send us message from here'})
    }
  } catch (error) {
    res.json({error:error.message})
  }
}
exports.getAllContact =async(req,res)=>{
    try {
        const messages = await Contact.find().lean().populate('sendBy')
        res.json({result:messages})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.getContact =async(req,res)=>{
    try {
        const message = await Contact.findById(req.params.id)
        res.json({result:message})
    } catch (error) {
        res.json({error:error.message})
    }
}
exports.deleteContact =async(req,res)=>{
    try {
        const msg = await Contact.findByIdAndDelete(req.params.id)
        res.json({result:msg})
    } catch (error) {
        res.json({error:error.message})
    }
}