import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

export const LoginComponents = () => {
    const [response,setResponse]=useState("")
    const [redirect,setRedirect]=useState(false)
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    userName: yup.string().required().min(5),
    password: yup.string().required().min(6)
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    Axios.post("http://localhost:5001/login", {
      email: data.email,
      userName: data.userName,
      password: data.password
    })
      .then((res) => {
        console.log('response received', res.status);
        if(res.status==200){
        
            setResponse("");
            setRedirect(true)


        }
       
      }).catch((err)=>{
        setResponse("invalid credential")
        
      })
    };
     

  return (
    
    <div className="page-design">
      {redirect && <Navigate to="/home"/>}
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="txt_field">
          <label htmlFor="E-mail">E-mail:</label>
          <span></span>
          <input type="email" id="E-mail" required {...register("email")} />
        </div>
        <div className="txt_field">
          <label htmlFor="Username">Username:</label>
          <span></span>
          <input type="text" id="Username" required {...register("userName")} />
        </div>
        <div className="txt_field">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="Password" required {...register("password")} />
        </div>
        <div className="pass">Forgot Password</div>
        <button type="submit" className="createAccount">Login</button>
        <div className="signup_link ">
          Not a member? <br /><a href="/signUp"> Create account</a>
        </div>
      {response&& <span className="error">{response}</span>}
      </form>
    </div>

  );
};
