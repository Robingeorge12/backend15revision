const {Router} = require("express")
const {auth} = require("../middleware/authentication")
const BmiData = require("../model/Bmis.model")
const bmi = Router()



bmi.get("/getProfile",auth, async (req, res) => {
    const {email} = req.body

    const bmi = await BmiData.find({email:email})
    res.send({"msg":bmi})
})


bmi.post("/calculateBMI",auth, async (req, res) => {
    const { height,weight} = req.body;
    let Bmi = weight/(2*height)
    const result = await BmiData.create({height,weight,Bmi})
    res.send("BMI data stored")

})


// bmi.get("/",auth,(req,res)=>{

//     console.log(req.body)
//     res.status("200").send("welcome BMI")
// })

module.exports = bmi