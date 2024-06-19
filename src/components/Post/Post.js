import React, { useState } from 'react';
import axios from '../../axiosInstance.js';

function Post() {
    const [Company, setCompany] = useState('');
    const [Type, setType] = useState('');
    const [Role, setRole] = useState('');
    const [Location, setLocation] = useState('');
    const [Salary, setSalary] = useState('');
    const [Content, setContent] = useState('');
    const [Duration, setDuration] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const isloggedin = await axios.get('/users/details');
            console.log(isloggedin);

            if (isloggedin.data.status === "failure") {
                alert("No User is logged in");
                return; // Exit the function if no user is logged in
            }

            const postData = {
                company: Company,
                type: Type,
                role: Role,
                content: Content,
                duration: Duration,
                location: Location,
                salary: Salary
            };

            const result = await axios.post('/post', postData);

            if (result.data.status === "success") {
                setResponse("Posted Successfully");
            } else {
                setResponse("Failed to post the data");
            }

        } catch (error) {
            console.error("There was an error posting the data!", error);
            setResponse('Error posting the data');
        }
    }

    return (
        <>
            <header className="site-header">
                <div className="section-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="text-white">Post an Experience</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Post</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="section-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div>
                            <form className="custom-form hero-form" onSubmit={handleSubmit} method="post">
                                <h3 className="text-white mb-3">Share your Experience</h3>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi-building custom-icon"></i></span>
                                            <input type="text" name="company" id="company" className="form-control" placeholder="Company" onChange={(e) => setCompany(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon2"><i className="bi-gear custom-icon"></i></span>
                                            <input type="text" name="type" id="type" className="form-control" placeholder="Type (Intern/FTE)" onChange={(e) => setType(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon3"><i className="bi-person custom-icon"></i></span>
                                            <input type="text" name="role" id="role" className="form-control" placeholder="Role" onChange={(e) => setRole(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon2"><i className="bi-geo custom-icon"></i></span>
                                            <input type="text" name="location" id="location" className="form-control" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon3"><i className="bi-currency-dollar custom-icon"></i></span>
                                            <input type="text" name="salary" id="salary" className="form-control" placeholder="Stipend" onChange={(e) => setSalary(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon4"><i className="bi-chat custom-icon"></i></span>
                                            <textarea name="content" id="content" className="form-control" placeholder="Experience" onChange={(e) => setContent(e.target.value)} style={{ height: '120px', resize: 'none' }} required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon5"><i className="bi-clock custom-icon"></i></span>
                                            <input type="text" name="duration" id="duration" className="form-control" placeholder="Duration" onChange={(e) => setDuration(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="form-control">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {response && <p>{response}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Post