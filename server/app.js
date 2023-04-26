require('dotenv').config();
const express=require("express")
const app=express();
const cors=require("cors");
const cookieParser=require("cookie-parser")
const bodyParser=require('body-parser')
const signUpRoute=require('./routes/signUp')
 const movieRoutes=require('./routes/movie.route');
const db=require('./model/db')

db
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())
app.use(express.json())

//  get all data from db
app.use('/api',movieRoutes);

app.use("/",signUpRoute)

 const port=5001
 const start=async()=>{
   
  
    app.listen(port,()=>{
        console.log('connected and working'+""+port);
    })
   
    
 }
 start()
