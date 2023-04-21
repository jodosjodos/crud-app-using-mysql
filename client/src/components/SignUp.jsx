import * as yup from "yup"
 import {useForm} from "react-hook-form"
 import {yupResolver} from "@hookform/resolvers/yup"
 import Axios from "axios"
import { useEffect, useState } from "react"
import { Navigate} from 'react-router-dom';

export const  SignUpComponent=()=>{
let [response,setResponse]=useState("");
const [redirect, setRedirect] = useState(null);

    const schema=yup.object().shape({
        email:yup.string().email().required(),
        userName:yup.string().required().min(5),
        password:yup.string().required().min(6),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"password doesn't match")
    })
  const {register,handleSubmit,formState:{errors}} =useForm(
    {resolver:yupResolver(schema)}
  )
    const onSubmit=(data)=>{

        Axios.post("http://localhost:5001/signUp",{
           email:data.email,
           userName:data.userName,
           password:data.password,
           confirmPassword:data.confirmPassword
        }).then((res)=>{
            if(res.data === "successfully saved"){
                console.log("Succesffuly loged in");
                    setRedirect(true);
                    setResponse("")
            }else{
                console.log("There was error");
                setResponse(res.data)
            }
        })
          }
  
    
   
   

    return(
       
        <div className="page-design">
             {redirect && (
            <Navigate to='/login' />
        )}
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="txt_field">
            <label htmlFor="E-mail">E-mail:</label>
            <span className="error">{errors.email?.message}</span>
            <input type="email" name="email" id="E-mail" required  {...register("email")} />
        </div>
        <div className="txt_field">
            <label htmlFor="Username">Username:</label>
            <span className="error">{errors.userName?.message}</span>
            <input type="text" name="userName" id="Username" required  {...register("userName")} / >
        </div>
        <div className="txt_field">
            <span className="error">{errors.password?.message}</span>
            <label htmlFor="Password">Password:</label>
            <input type="password" name="password" id="Password" required  {...register("password")}/ >
        </div> 
        <div className="txt_field">
        <span className="error">{errors.confirmPassword?.message}</span>
            <label htmlFor="confrimPassword">confirm Password:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" required  {...register("confirmPassword")} />
        </div>
       
        <button type="Submit" name="Log In"   className="createAccount" >Create account</button>
       </form>
       {response&&<span className="error db">{response}</span>}
    </div>
    )
}
   

