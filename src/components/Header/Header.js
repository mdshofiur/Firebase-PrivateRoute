import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {users, GoogleSignOut} = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/login">Log In</NavLink>
               {
                 users?.displayName?<button onClick={GoogleSignOut}>log out</button>:<NavLink to="/register">Sign Up</NavLink>
               }
                
            </nav>
        </div>
    );
};

export default Header;