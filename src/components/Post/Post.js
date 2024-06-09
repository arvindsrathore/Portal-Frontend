import React from 'react'
import {useState} from 'react';
import axios from '../../axiosInstance.js';

function Post() {
    const [Company,setCompany] = useState('');
    const [Type,setType] = useState();
    const [Role,setRole] = useState();
    const [Location,setLocation] = useState();
    const [Salary,setSalary] = useState();
    const [Content,setContent] = useState();
    const [Duration,setDuration] = useState();
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
      try {
            const isloggedin = await axios.get('/users/details');
            if(isloggedin.data.status === "failure"){
              alert("No User is logged in")
            }
            const postData = {
                "company": Company,
                "type": Type,
                "role": Role,
                "content": Content,
                "duration": Duration,
                "location": Location,
                "salary": Salary
            }
            const result = await axios.post('/post', postData);
            if (result.data.status==="success") {
                setResponse("Posted Successfully")
              }

        } catch (error) {
            console.error("There was an error posting the data!", error);
            setResponse('Error logging in');
        }
    }

  return (
    <>
    <header class="site-header">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white">Post a Experience</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li class="breadcrumb-item active" aria-current="page">Post</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
    <section class="hero-section d-flex justify-content-center align-items-center">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        {/* <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div class="hero-section-text mt-5">
                                <h6 class="text-white">Are you looking for your dream job?</h6>

                                <h1 class="hero-title text-white mt-4 mb-4">Online Platform. Best Job portal</h1>

                                <a href="#categories-section" class="custom-btn custom-border-btn btn">Browse Categories</a>
                            </div>
                        </div> */} 

                        <div >
                            <form class="custom-form hero-form"  onSubmit={handleSubmit} method="get">
                            <h3 class="text-white mb-3">Share your Experience</h3>

                              <div class="row">
                                  <div class="col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon1"><i class="bi-building custom-icon"></i></span>
                                          <input type="text" name="company" id="company" class="form-control" placeholder="Company" onChange={(e) => setCompany(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-lg-6 col-md-6 col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon2"><i class="bi-gear custom-icon"></i></span>
                                          <input type="text" name="type" id="type" class="form-control" placeholder="Type (Intern/FTE)" onChange={(e) => setType(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-lg-6 col-md-6 col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon3"><i class="bi-person custom-icon"></i></span>
                                          <input type="text" name="role" id="role" class="form-control" placeholder="Role" onChange={(e) => setRole(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-lg-6 col-md-6 col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon2"><i class="bi-geo custom-icon"></i></span>
                                          <input type="text" name="type" id="type" class="form-control" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-lg-6 col-md-6 col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon3"><i class="bi-currency-dollar custom-icon"></i></span>
                                          <input type="text" name="role" id="role" class="form-control" placeholder="Stipend" onChange={(e) => setSalary(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon4"><i class="bi-chat custom-icon"></i></span>
                                          <textarea type="text" name="experience" id="experience" class="form-control" placeholder="Experience" onChange={(e) => setContent(e.target.value)} style={{ height: '120px', resize: 'none' }} required ></textarea>
                                      </div>
                                  </div>

                                  <div class="col-12 mb-3">
                                      <div class="input-group">
                                          <span class="input-group-text" id="basic-addon5"><i class="bi-clock custom-icon"></i></span>
                                          <input type="text" name="duration" id="duration" class="form-control" placeholder="Duration" onChange={(e) => setDuration(e.target.value)} required></input>
                                      </div>
                                  </div>

                                  <div class="col-12">
                                      <button type="submit" class="form-control">
                                          Submit
                                      </button>
                                  </div>
                              </div>
                            </form>{response && <p>{response}</p>}
                        </div>

                    </div>
                </div>
            </section>
    
    </>

  )
}

export default Post