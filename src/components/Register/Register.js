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

        <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div className="hero-section-text mt-5">
                                <h6 className="text-white">Are you looking for your dream job?</h6>

                                <h1 className="hero-title text-white mt-4 mb-4">Online Platform. Best Job portal</h1>

                                <a href="#categories-section" className="custom-btn custom-border-btn btn">Browse Categories</a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <form className="custom-form hero-form"  onSubmit={handleSubmit} method="get">
                                <h3 className="text-white mb-3">New User! Register Now</h3>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi-person custom-icon"></i></span>

                                            <input type="email" name="email" id="job-title" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon2"><i className="bi-eye custom-icon"></i></span>

                                            <input type="password" name="password" id="job-location" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <button type="submit" className="form-control">
                                            Register
                                        </button>
                                    </div>

                                    <div className="col-12">
                                        
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