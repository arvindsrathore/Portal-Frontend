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
      <header class='header'>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center">
                    {/* <img src="images/logo.png" class="img-fluid logo-image"> */}

                    <div class="d-flex flex-column">
                        <strong class="logo-text">EXSP</strong>
                        <small class="logo-slogan">Exp Share Portal</small>
                    </div>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-center ms-lg-5">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/explore">Explore</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/post">Post</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li class="nav-item ms-lg-auto">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link  btn" to='/login'>Login</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link  btn" to='/logout'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

      </header>

    {/* //     <header class="header">
    //   <nav class="navbar">
    //     <h2 class="logo"><a href="#">ESP </a></h2>
    //     <input type="checkbox" id="menu-toggle" />
    //     <label for="menu-toggle" id="hamburger-btn">
    //       <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    //         <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    //       </svg>
    //     </label>
    //     <ul class="links">
    //       <li><Link to="/home">Home</Link></li>
    //       <li><Link to="/explore">Explore</Link></li>
    //       <li><Link to="/">About Us</Link></li>
    //       <li><Link to="/contact">Contact Us</Link></li>
    //     </ul>
    //     <div class="buttons">
    //         <Link to='/login'>Log In</Link>
    //         <Link to='/register'>Register</Link>
    //     </div>
    //   </nav>
    // </header> */}
      </>
    );
}