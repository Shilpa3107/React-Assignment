import './LoginScreen.css';
function LoginScreen(){
    return(
        <div className = "content">
        <h1> Signin to your 
        <br/>PopX account </h1>
        <p>Lorem ipsum dolor sit amet,
        <br/> consectetur adipiscing elit, </p>
        <fieldset>
            <legend>Email Address</legend>
            Enter email address
        </fieldset>
        <fieldset>
            <legend>Password</legend>
            Enter password
        </fieldset>
        <button>Login</button>
        </div>
    );
}

export default LoginScreen;