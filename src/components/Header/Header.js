import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from '../../axiosInstance.js';
import './style.css';

export default function Header() {

    let [LoggedIn,setLoggedIn] = useState(false);

    var currUser = "";
    const handleLogIn = async(e) => {
        const result = await axios.get('/users/details');
        currUser = result.data.email;
        console.log(result.data)
        if(result.data.status === "success") setLoggedIn(LoggedIn = true)
        else    setLoggedIn(LoggedIn = false);
    }

    useEffect(() => {
        handleLogIn();
      }, []);
      
      console.log(LoggedIn)
    return (

        <header class="header">
      <nav class="navbar">
        <h2 class="logo"><a href="#">ESP </a></h2>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </label>
        <ul class="links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div class="buttons">
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
        </div>
      </nav>
    </header>


        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <img
        //                     src={logo}
        //                     className="mr-3 w-60 h-24"
        //                     alt="Logo"
        //                 />
        //             </Link>
        //             {!LoggedIn && (<div className="flex items-center lg:order-2">
        //                 <Link
        //                     to="/login"
        //                     className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Log in
        //                 </Link>
        //                 <Link
        //                     to="/register"
        //                     className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Register
        //                 </Link>
        //             </div>)}

        //             {LoggedIn && (<div className="flex items-center lg:order-2">
                        
        //                 <li 
        //                     className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Welcome {currUser}
        //                 </li>
        //             </div>)}

        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink
        //                         to="/"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/explore"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Explore
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/contact"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Contact
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/github"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Github
        //                         </NavLink>
        //                     </li>
                            
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
    );
}