const mongoose=require('mongoose')
const {Schema}=mongoose;

const HawkerSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
}
  });

const hawker=mongoose.model('hawker',HawkerSchema)
hawker.createIndexes();
  module.exports=mongoose.model('hawker',HawkerSchema)