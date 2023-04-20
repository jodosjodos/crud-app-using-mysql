import { Link } from "react-router-dom";
export const Navbar=()=>{
    return(
        <div className="links">
        <Link to="/Home" className="link">Home</Link>
       <Link to="/login" className="link">Login</Link>
        <Link to="/signUp" className="link">SignUp</Link>
        </div>
     
    )
}