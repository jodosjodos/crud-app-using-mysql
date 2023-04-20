export const LoginComponents=()=>{
    return(
        <div class="page-design">
        <h2>Login Here</h2>
        <form >
        <div class="txt_field">
            <label for="E-mail">E-mail:</label>
            <span></span>
            <input type="email" name="E-mail" id="E-mail" required/>
        </div>
        <div class="txt_field">
            <label for="Username">Username:</label>
            <span></span>
            <input type="text" name="Username" id="Username" required/>
        </div>
        <div class="txt_field">
            <label for="Password">Password:</label>
            <input type="password" name="Password" id="Password" required/>
        </div> 
        <div class="pass">Forgot Password</div>
        <input type="Submit" name="Log In" value="Log In"/>
        <div class="signup_link ">
            Not a member? <br/><a href="/signUp"> Create account</a>
        </div>
        </form> 
    </div>
    )
}