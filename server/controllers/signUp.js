const db= require( "../model/db");
const mysql=require('mysql')
const signUp=(req,res)=>{
const {email,userName,password}=req.body;
const checkSql=`SELECT email FROM users WHERE email =? `
db.query(checkSql,email,(err,results)=>{
    if(err){
        console.log(err);
    }else{
    if(results.length>0){
       
        res.send("email already exists")
        return;
    }
       else{
const postSql="INSERT INTO users (email,userName,password) VALUES(?,?,?)"
db.query(postSql,[email,userName,password],(err,results)=>{
    if(err){
        console.log(err);
    }else{
     
        res.send("successfully saved")
    }
})
       }
    }
})

}
module.exports={signUp}