const mongoose = require("mongoose")
require('dotenv').config()

const BmiShema = new mongoose.Schema({
 height:{type:Number,required:true},
 weight:{type:Number,required:true},
 Bmi: {type : Number}


})

const BmiData = mongoose.model("bmidata",BmiShema)

module.exports = BmiData