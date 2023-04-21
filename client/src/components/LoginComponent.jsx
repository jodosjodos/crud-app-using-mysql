export const LoginComponents=()=>{
    return(
        <div className="page-design">
        <h2>Login Here</h2>
        <form >
        <div className="txt_field">
            <label htmlFor="E-mail">E-mail:</label>
            <span></span>
            <input type="email" name="E-mail" id="E-mail" required/>
        </div>
        <div className="txt_field">
            <label htmlFor="Username">Username:</label>
            <span></span>
            <input type="text" name="Username" id="Username" required/>
        </div>
        <div className="txt_field">
            <label htmlFor="Password">Password:</label>
            <input type="password" name="Password" id="Password" required/>
        </div> 
        <div className="pass">Forgot Password</div>
        <button className="createAccount"> login</button>
        <div className="signup_link ">
            Not a member? <br/><a href="/signUp"> Create account</a>
        </div>
        </form> 
    </div>
    )
}