const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('Admin',new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    imageUrl:{String},
    createdAt:{type:Date,default: Date.now()},
    blogPost:[{type:mongoose.Types.ObjectId,ref:'Blog'}],
}))