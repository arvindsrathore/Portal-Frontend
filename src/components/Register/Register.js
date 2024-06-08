import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosInstance.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/users/register', { email, password });
      
      setResponse(result.data.message);
      if (result.data.status==="success") {
        navigate('/explore');  // Redirect to the Explore page
      }

    } catch (error) {
      console.error("There was an error posting the data!", error);
      setResponse('Error logging in');
    }
  };
  return (
    
    <>

        <section class="hero-section d-flex justify-content-center align-items-center">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div class="hero-section-text mt-5">
                                <h6 class="text-white">Are you looking for your dream job?</h6>

                                <h1 class="hero-title text-white mt-4 mb-4">Online Platform. Best Job portal</h1>

                                <a href="#categories-section" class="custom-btn custom-border-btn btn">Browse Categories</a>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <form class="custom-form hero-form"  onSubmit={handleSubmit} method="get">
                                <h3 class="text-white mb-3">New User! Register Now</h3>

                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi-person custom-icon"></i></span>

                                            <input type="email" name="email" id="job-title" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2"><i class="bi-eye custom-icon"></i></span>

                                            <input type="password" name="password" id="job-location" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required></input>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-12">
                                        <button type="submit" class="form-control">
                                            Register
                                        </button>
                                    </div>

                                    <div class="col-12">
                                        <div class="d-flex flex-wrap align-items-center mt-4 mt-lg-0">
                                            <span class="text-white mb-lg-0 mb-md-0 me-2">Popular keywords:</span>

                                            <div>
                                                <a href="job-listings.html" class="badge">Web design</a>

                                                <a href="job-listings.html" class="badge">Marketing</a>

                                                <a href="job-listings.html" class="badge">Customer support</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>{response && <p>{response}</p>}
                        </div>

                    </div>
                </div>
            </section>
    
    </>
    // <>
    //     <header className="Register-header">
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Email:
    //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    //       </label>
    //       <br />
    //       <label>
    //         Password:
    //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    //       </label>
    //       <br />
    //       <button type="submit">Register</button>
    //     </form>
    //     {response && <p>{response}</p>}
    //   </header>
    // </>
  )
}

export default Register