export const  SignUpComponent=()=>{
    return(
        <div class="page-design">
        <h2>Sign up</h2>
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
       
        <input type="Submit" name="Log In" value="Create account" className="createAccount"/>
        <p class="span-class">OR</p>
        <br/>
         <input type="submit" class="google" name="Sign In with GOOGLE" value="Sign In with GOOGLE"/>
        </form> 
    </div>
    )
}
   
