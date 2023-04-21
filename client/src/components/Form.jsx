import { useEffect, useState } from 'react' 
import Axios from "axios"

export const FormHandling=()=>{
    const [movie, setMovieName] = useState("")
    const [review, setReview] = useState("")
    const [movieList, setMovieList] = useState([])
    const [updateReview,setUpdateReview]=useState("")
    const [userId,setUserId]=useState(null)
  
//  get all movies

    useEffect(() => {
        Axios.get("http://localhost:5001/api/get")
            .then((data) => {
                
                setMovieList(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
// get moviename typed
    
    const handleMovieName = (e) => {
        setMovieName(e.target.value);
        const id=localStorage.getItem("userId");
        if(id){
            setUserId(id)
        }
    }
    
//  get movieReview typed

    const handleMovieReview = (e) => {
        setReview(e.target.value)
    }

//  created new movie

    const submitReview = (e) => {
     
        Axios.post("http://localhost:5001/api/post", { movieName: movie, movieReview: review ,userId:userId})
            .then(() => {
              
                setMovieList([...movieList, { movieName: movie, movieReview: review }]);
              
                setMovieName("");
                setReview("");
            })
            .catch((err) => {
                console.log(err);
            });
    };
      
//  get value being typed in  udpate input

     const updatedReview=(e)=>{
      setUpdateReview(e.target.value);
     }

    // update data

    const updateFunction=(movie)=>{
     Axios.put("http://localhost:5001/api/update",{movieName:movie,movieReview:updateReview}).then(()=>{
        console.log('it is updated');
        setUpdateReview("")
        setMovieList((prev)=>{
            if(prev.movieName==movie){
                return {
                    movieName:prev.movieName,
                    movieReview:movieReview

                }
            }
            else{
                return  prev
            }
        })
     })
     .catch((err)=>{
        console.log(err);
     })
    }

    // delete movie

    const deleteMovie=(movie)=>{
        Axios.delete(`http://localhost:5001/api/delete/${movie}`)
        .then(()=>{
          setMovieList((prev)=>{
           return prev.map(()=>{

                return prev.movieName !==movie
            })
           
          })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div className='parentDiv'>
            <form action="" className='form'>
                <div className='inputDiv'>

                 <h1>Movie Review</h1>
                  <div className='each'>
                    <label htmlFor="movieName">Movie Name:</label>
                    <span></span>
                    <input type="text" id='movieName' name="movieName" value={movie} onChange={handleMovieName} />
                 </div>

                  <div className='each'>
                  <label htmlFor="movieReview">Review:</label>
                  <span></span>
                  <input type="text" name="review" id="movieReview" value={review} onChange={handleMovieReview} />  
                 </div>
        
                 <button className='submit' onClick={submitReview} type="submit">Submit</button>
                </div>
           
            <div className='renderDiv'>
                {movieList.map((each, index) => (
                    <div key={index} className='subContainer'>
                        <h4 className='movieName'>{each.movieName}</h4>
                       review: <p className='movieReview'>{each.movieReview}</p>
                         <div className='rendered'>
                            <span></span>
                          <input type="text" name='updateMovieReview' placeholder=' update your movie review' onChange={updatedReview}  className='updateInput'/>
                         </div>
                         <div className='buttons'>
                         <button onClick={()=>{updateFunction(each.movieName)}} type='submit' className='updateButton'>update</button>
                          <button onClick={()=>{deleteMovie(each.movieName)}} type='submit' className='deleteButton'>delete</button>
                         </div>
                          
                    </div>
                ))}
            </div>
            </form>
        </div>
    );
}
                
                    
                

