const db= require( "../model/db");
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
            console.log(results);
            res.status(200).send(results[0])
        }else{
            res.status(401).send("not found")
        }
        
       
    }
    
})
}
module.exports={login}