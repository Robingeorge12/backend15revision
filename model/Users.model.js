const mongoose = require("mongoose")
require('dotenv').config()

const UserShema = new mongoose.Schema({
name:{type:String,required:true},
 email:{type:String,required:true},
 password:{type:String,required:true}

})

const UserData = mongoose.model("userbmi",UserShema)

module.exports = {UserData}