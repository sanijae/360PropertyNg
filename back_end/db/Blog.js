const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('Blog',new Schema({
    title:{String},
    content:{String},
    images:[String],
    createdAt:{type:Date,default: Date.now()},
    createdBy:{type:mongoose.Types.ObjectId},
}))