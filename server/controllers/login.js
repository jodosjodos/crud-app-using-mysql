const db= require( "../model/db");
const jwt=require('jsonwebtoken');
const maxAge=90*24*60*60;
const secret="ONLY ONE ON THE EARTH"
const createToken = (id) => {
    return jwt.sign({ id },secret, { expiresIn: maxAge });
  }
// console.log(secret);
  
const login=(req,res)=>{

const{email,userName,password}=req.body
const getAllqll="SELECT * FROM users WHERE email=?"
db.query(getAllqll,email,(err,results)=>{
    if(err){
        console.log(err);
        res.status(501).send("internal server error")
    }
    if(results.length==0){
      
        res.status(404).send('no user found');
    
    }else{
        if(results[0].email===email && results[0].userName===userName && results[0].password===password){
          
            const token=createToken(results[0].id)
            res.set('Authorization', `Bearer ${token}`);
            res.status(200).send({userId:results[0].id});
        
            
        }else{
            res.status(401).send("not found")
        }
        
       
    }
    
})
}
module.exports={login}