const {Router} = require("express")
const {auth} = require("../middleware/authentication")
const bmi = Router()

bmi.get("/",auth,(req,res)=>{

    res.status("200").send("welcome")
})

module.exports = bmi