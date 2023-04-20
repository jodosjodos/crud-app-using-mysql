const express=require("express")
const app=express();
const cors=require("cors")
const bodyParser=require('body-parser')
const mysql=require("mysql")

const db= mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"crud"
})


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
    
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    const sqlInsert=` INSERT INTO review  (movieName,movieReview) VALUES (?,?)`
    db.query(sqlInsert,[movieName,movieReview],(err,results )=>{
     if(err){
        console.log(err);
        res.send(err)
     }else{
       
        console.log('successfully');
     }
    })
})
app.put("/api/update",(req,res)=>{
   
    console.log(req.body);
    const movie=req.body.movieName
    const review=req.body.movieReview
    const sqlUpdate="UPDATE review SET movieReview=? WHERE movieName=?"
    db.query(sqlUpdate,[review,movie],(err)=>{
        if(err) throw err
       
    })
    
})

// delete movie
app.delete("/api/delete/:movie",(req,res)=>{
   
    const name=req.params.movie
    const sqlDelete='DELETE FROM review where movieName=?'
    db.query(sqlDelete,name,(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
        }
    })
})
 const port=5001
 const start=async()=>{
   
     db.connect(()=>{
        console.log('connected on mysql db');
        app.listen(port,()=>{
            console.log('connected and working');
        })
    }) 
   
   
    
 }
 start()