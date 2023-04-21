const express=require('express')
 router=express.Router()
const {signUp} =require("../controllers/signUp")
router.route("").post(signUp)

module.exports=router