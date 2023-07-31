const { default: mongoose } = require("mongoose");

const Post = mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    type:{type:String,required:true},
    category:{type:String,required:true},
    city:{type:String},
    state:{type:String},
    address:{type:String},
    price:{type:String},
    minPrice:{type:String},
    maxPrice:{type:String},
    duration:{type:String},
    negotiable:{type:String},
    availability:{type:String},
    photos:[Object],
    shops:{type:Number},
    beds:{type:Number},
    rooms:{type:Number},
    toilets:{type:Number},
    bathrooms:{type:Number},
    safety:[String],
    amenities:[Object],
    features:[Object],
    createdAt:{type:Date,default:Date.now()},
    hostedBy:{type:mongoose.Types.ObjectId,ref:'User',required:true},
})

module.exports = mongoose.model("Post",Post)