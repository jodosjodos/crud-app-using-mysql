 const db= require( "../model/db");

const getAllMovies=async(req,res)=>{
    // console.log(req.params.userEmail);
   
    const sqlInsert=` SELECT * FROM review  where userEmail=?`
    db.query(sqlInsert,req.params.userEmail,(err,results)=>{
        if(err){
            console.log(err);
            res.status(501).send("error has occured")
        }
        else{
            // console.log(results);
        res.status(200).send(results)
        }
    }) 
}
const addNewMovie=async(req,res)=>{
   await console.log(req.body);
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    // console.log(req.body.userEmail);
    const userEmail=req.body.userEmail
  
    
    const sqlInsert=` INSERT INTO review  (movieName,movieReview,userEmail) VALUES (?,?,?)`
    db.query(sqlInsert,[movieName,movieReview,userEmail],(err,results )=>{
     if(err){
        console.log(err);
        res.status(501).send(err)
     }else{
       
        console.log('successfully');
        res.status(201).send("it is saved")
     }
    })
}
const updateMovie=(req,res)=>{
    
    
    const movie=req.body.movieName
    const review=req.body.movieReview
    const sqlUpdate="UPDATE review SET movieReview=? WHERE movieName=?"
    db.query(sqlUpdate,[review,movie],(err)=>{
        if(err) {
        console.log(err);
        res.status(501).send("internal server error")
            // throw err
        }
       
    })
}
const deleteMovie=(req,res)=>{
  const name=req.params.movie
    const sqlDelete='DELETE FROM review where movieName=?'
    db.query(sqlDelete,name,(err,results)=>{
        if(err){
            console.log(err);
            res.status(501).send("internal server error")
        }
        else{
            res.status(200).send("successfully deleted")
            console.log(results);
        }
    })
}
module.exports={
    getAllMovies,
    deleteMovie,
    updateMovie,
    addNewMovie
}