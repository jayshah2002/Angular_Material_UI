const mongoose=require("mongoose");


const registerSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    pass:{type:String,require: [true, "Please enter password"]},
    
})
const User=mongoose.model("user",registerSchema);
module.exports = User