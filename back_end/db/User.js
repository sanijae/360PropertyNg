const { default: mongoose } = require("mongoose");

const User = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number},
    businessdesc:{type:String},
    businessaddress:{type:String},
    businessname:{type:String},
    imageUrl:String,
    posts:[{type:mongoose.Types.ObjectId,ref:'Post'}],
})

module.exports = mongoose.model('User',User)