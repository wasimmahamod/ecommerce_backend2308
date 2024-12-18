const { default: mongoose, Schema } = require("mongoose");

let userSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    otp:{
        type:Number
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model("User", userSchema)




