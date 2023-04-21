 const db= require( "../model/db");

const getAllMovies=async(req,res)=>{
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
}
const addNewMovie=(req,res)=>{
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    const userId=req.body.userId
    // console.log(userId);
    const sqlInsert=` INSERT INTO review  (movieName,movieReview,userId) VALUES (?,?,?)`
    db.query(sqlInsert,[movieName,movieReview,userId],(err,results )=>{
     if(err){
        console.log(err);
        res.send(err)
     }else{
       
        console.log('successfully');
     }
    })
}
const updateMovie=(req,res)=>{
    
    
    const movie=req.body.movieName
    const review=req.body.movieReview
    const sqlUpdate="UPDATE review SET movieReview=? WHERE movieName=?"
    db.query(sqlUpdate,[review,movie],(err)=>{
        if(err) throw err
       
    })
}
const deleteMovie=(req,res)=>{
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
}
module.exports={
    getAllMovies,
    deleteMovie,
    updateMovie,
    addNewMovie
}