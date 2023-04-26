import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate} from 'react-router-dom';

export const Navbar=()=>{

    const logoutUser=()=>{
        localStorage.setItem("email","")
    }
   
    
    return(
        <div className="links">
            {islogged &&  <Navigate to="/login"/>}
        <Link to="/Home" className="link" >Home</Link>
       <Link to="/login" className="link">Login</Link>
        <Link to="/signUp" className="link">SignUp</Link>
        <Link to="/" className="link" onClick={logoutUser}>Logout</Link>
        </div>
     
    )
}