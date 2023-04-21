const express=require('express')
const router=express.Router()
const {signUp} =require("../controllers/signUp")
const {login} =require("../controllers/login")
router.route("/signUp").post(signUp)
router.route("/login").post(login)

module.exports=router