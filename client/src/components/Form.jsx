import { useEffect, useState } from 'react' 
import Axios from "axios"
export const FormHandling=()=>{
    const [movie,setMovieName]=useState("")
  const[review,setReview]=useState("")
  const [movieReview,setMovieReview]=useState([])
  const handleMovieName=(e)=>{
    setMovieName(e.target.value)
  }
  const handleMovieReview=(e)=>{
    setReview(e.target.value)
  }

const submitReview=(e)=>{
    e.preventDefault()
    Axios.post("http://localhost:5001/api",{movieName:movie,movieReview:review})
    .then(()=>{
        console.log('successfully inserted');
    })
    .catch((err)=>{
        console.log(err);
    })
}
useEffect(()=>{

  Axios.get("http://localhost:5001/api/get").then((data)=>{
    console.log(data.data);
    setMovieReview(data.data)
    
  }).catch(err=>{
    console.log(err);
  })
},[])

  return(

    <div className='form'>
    <form action="">
      <label htmlFor="movieName">movieName</label>
      <input type="text" id='movieName' name="movieName" onChange={handleMovieName} />
      <label htmlFor="movieReview"> Review</label>
      <input type="text" name="review" id="movieReview" onChange={handleMovieReview} />
      <button onClick={submitReview} type="submit">submit</button>

    </form>
    <div>
      {movieReview.map((each)=>{
        return(
          <div key={each.id}>
            <h1>{each.movieName}</h1>
            <h3>{each.movieReview}</h3>
          </div>
        )
      })}
    </div>
    
  </div>
  )
}