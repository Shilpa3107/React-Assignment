import './SignUp.css';
import {Link} from 'react-router-dom';
function SignUp(){
    return(
        <div className = "contents">
            <h1> Create your 
            <br/>
            PopX account</h1>
            <fieldset>
            <legend>Full Name <span className = "required">*</span></legend>
            Mary Doe
        </fieldset>
        <fieldset>
            <legend>Phone number </legend>
            Mary Doe
        </fieldset>
        <fieldset>
            <legend>Password <span className = "required">*</span></legend>
            Mary Doe
        </fieldset>
        <fieldset>
            <legend>Company name <span className = "required">*</span></legend>
            Mary Doe
        </fieldset>
        <p> Are you an Agency?<span className = "required">*</span> </p>
        <input type="radio" checked/>Yes 
        <input type="radio"/>No
        <br/>
        <button><Link to="/account"> Create Account</Link> </button>
        </div>
    );

}

export default SignUp;