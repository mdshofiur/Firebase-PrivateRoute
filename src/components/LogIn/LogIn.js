import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'

const LogIn = () => {
    const {SignUpwithGoogle} = useAuth();
    const locations = useLocation();
    const history = useHistory()
    const url = locations.state?.from || '/shop';

    const GoogleHandler = ()=>{
        SignUpwithGoogle()
       .then((result) => {
       history.push(url)
      })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form action="" >
                  <input type="text" name="text" id="one" placeholder="your email"/>
                  <br />
                  <input type="password" name="pass" id="two" placeholder="your password"/>
                  <br />
                  <input type="submit" name="submit" id="three" value="Submit"/>
                </form>
                <p>new to ema-jhon <Link to="/register">Create a new account</Link></p>
                <div>--------or---------</div>
                <button onClick={GoogleHandler} className="btn-regular">Google Log In</button>
            </div>
        </div>
    );
};

export default LogIn;