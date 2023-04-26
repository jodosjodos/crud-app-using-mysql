const express=require('express')
 router=express.Router()
const {getAllMovies,addNewMovie,updateMovie,deleteMovie}=require("../controllers/movie")
router.route("/get/:userEmail").get(getAllMovies)
router.route("/post").post(addNewMovie)
router.route("/update").put(updateMovie)
router.route("/delete/:movie").delete(deleteMovie)

module.exports=router