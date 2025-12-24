import './LoginScreen.css';
import {Link} from 'react-router-dom';
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
        <button><Link to = "/account">Login</Link></button>
        </div>
    );
}

export default LoginScreen;