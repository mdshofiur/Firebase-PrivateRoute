import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form"> 
            <div>
              <h2>Register: Create Account</h2>
                <form action="" >
                  <input type="text" name="" id="one" placeholder="your email"/>
                  <br />
                  <input type="password" name="" id="two" placeholder="your password"/>
                  <br />
                  <input type="password" name="" id="three" placeholder="re-enter your password"/>
                  <br />
                  <input type="submit" name="" id="four" value="Submit"/>
                </form>
                <p>Already have an account? <Link to="login">Log In</Link></p>
               
            </div>
        </div>
    );
};

export default Register;