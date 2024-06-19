import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../axiosInstance.js';

export default function Header() {
    let [LoggedIn, setLoggedIn] = useState(false);
    let [email, setEmail] = useState("");

    const handleLogIn = async (e) => {
        const result = await axios.get('/users/details');
        if (result.data.status === "success") {
            console.log(result.data);
            setLoggedIn(true);
            setEmail(result.data.message['Email '] );
        } else {
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        handleLogIn();
    }, []);

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

                                {LoggedIn ? (
                                    <>
                                        <li className="nav-item ms-lg-auto">
                                            <span className="nav-link">Hello {email}</span>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link btn" to='/logout'>Logout</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item ms-lg-auto">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link btn" to='/login'>Login</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
