const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
},{timestamps: true});

module.exports=mongoose.model("User",UserSchema);

