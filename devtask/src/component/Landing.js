import './Landing.css';
import {Link} from 'react-router-dom';

function Landing(){
   return(
    <div className = "main-content">
    <h2>Welcome to PopX</h2>
    <p className="content">Lorem ipsum dolor sit amet, 
    <br/>consectetur adipiscing elit.</p>
    <button className="signup"> Create Account </button>
    <button className = "login"><Link to="/login"> Already Registered? Login </Link> </button>
    </div>
   
   );
}

export default Landing;