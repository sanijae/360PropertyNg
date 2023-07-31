const { Schema, default: mongoose } = require("mongoose");


module.exports = mongoose.model('Contact', mongoose.Schema({
    title:{type:String},
    content:{type:String},
    reply:{
        title:{String},
        content:{String},
        createdAt:{type:Date,default:Date.now()},
        replyBy:{type:mongoose.Types.ObjectId},
    },
    createdAt:{type:Date, default:Date.now()},
    sendBy:{type:mongoose.Types.ObjectId}
}))