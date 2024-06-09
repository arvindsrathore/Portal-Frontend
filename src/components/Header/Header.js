import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from '../../axiosInstance.js';

export default function Header () {

    let [LoggedIn,setLoggedIn] = useState(false);

    const handleLogIn = async(e) => {
        const result = await axios.get('/users/details');
        if(result.data.status === "success") setLoggedIn(LoggedIn = true)
        else    setLoggedIn(LoggedIn = false);
    }

    useEffect(() => {
        handleLogIn();
      }, []);
      
      console.log(LoggedIn)
    return (
      <>
      <header className='header'>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center">
                    {/* <img src="images/logo.png" className="img-fluid logo-image"> */}

                    <div className="d-flex flex-column">
                        <strong className="logo-text">EXSP</strong>
                        <small className="logo-slogan">Exp Share Portal</small>
                    </div>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center ms-lg-5">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/post">Post</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item ms-lg-auto">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link  btn" to='/login'>Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link  btn" to='/logout'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

      </header>

    {/* //     <header className="header">
    //   <nav className="navbar">
    //     <h2 className="logo"><a href="#">ESP </a></h2>
    //     <input type="checkbox" id="menu-toggle" />
    //     <label for="menu-toggle" id="hamburger-btn">
    //       <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    //         <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    //       </svg>
    //     </label>
    //     <ul className="links">
    //       <li><Link to="/home">Home</Link></li>
    //       <li><Link to="/explore">Explore</Link></li>
    //       <li><Link to="/">About Us</Link></li>
    //       <li><Link to="/contact">Contact Us</Link></li>
    //     </ul>
    //     <div className="buttons">
    //         <Link to='/login'>Log In</Link>
    //         <Link to='/register'>Register</Link>
    //     </div>
    //   </nav>
    // </header> */}
      </>
    );
}