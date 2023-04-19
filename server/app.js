const express=require("express")
const app=express();
const cors=require("cors")
const bodyParser=require('body-parser')
const mysql=require("mysql")

const db=mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:"crud"
}); 


app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

//  get all data from db
app.get("/api/get",(req,res)=>{
    const sqlInsert=` SELECT * FROM review`
    db.query(sqlInsert,(err,results)=>{
        if(err){
            console.log(err);
            res.send("error has occured")
        }
        else{

            res.send(results)
        }
    })
})

app.post("/api",(req,res)=>{
    // const {movieName,movieReview}=req.body
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    const sqlInsert=` INSERT INTO review  (movieName,movieReview) VALUES (?,?)`
    db.query(sqlInsert,[movieName,movieReview],(err,results )=>{
     if(err){
        console.log(err);
     }else{
        console.log(results);
        // res.send("successfully")
     }
    })
})
app.listen(5001,()=>{
    console.log('connected and working');
})