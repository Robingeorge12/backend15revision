const express = require("express")
const app = express()
require('dotenv').config()
const {connection} = require("./db.js")
const signup = require("./route/Signup.route")
const login = require("./route/Login.route")
const bmi = require("./route/BMI.route")
var cors = require('cors')
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 7600 

app.use("/signup",signup)
app.use("/login",login)
app.use("/bmi",bmi)

app.get("/",(req,res)=>{
    res.send({"msg":"welcome to eavl"})
})

app.listen(PORT,async ()=>{
try{
  await connection
console.log("PORT connected",PORT )
}catch(er){
    console.log(er)

}

    // console.log("PORT",PORT)
})