import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance.js';
import { useNavigate } from 'react-router-dom';

import photo from './../../assets/images/jobs/it-professional-works-startup-project.jpg'

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [companyReviews, setCompanyReviews] = useState(null);

  useEffect(() => {
    axios.get(`/explore/details/${companyId}`)
      .then(response => {
        const data = response.data.message;
        console.log(data)
        setCompanyReviews(data)
      })
      .catch(e => {
        console.log('Error fetching company details')
      })
    
  }, [companyId]);

  const navigate = useNavigate();
  const handleReviewData = async(reviewId) => {
    navigate(`/details/readreview/${reviewId}`)
  }
  
  if (!companyReviews) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <header className="site-header">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="text-white">Listed Reviews</h1>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a>Home</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">Explore</li>

                                    <li className="breadcrumb-item active" aria-current="page">ReviewsList</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
    <section className="job-section recent-jobs-section section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-12 mb-4">
                            <h2>Recent Interview Experiences</h2>

                            <p><strong>Over 100s of engineers</strong> have provided their valuable interview experience for students to learn and avoid any unnecessarry mistakes and prepare well for their company rounds.</p>
                        </div>

                        <div className="clearfix"></div>
                        {companyReviews.map((companyReview, index) => (
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="job-thumb job-thumb-box">
                                <div className="job-image-box-wrap">
                                        <img src={photo} className="job-image img-fluid" alt=""></img>

                                    <div className="job-image-box-wrap-info d-flex align-items-center">
                                        <p className="mb-0">
                                            <a className="badge badge-level">{companyReview.type}</a>
                                        </p>

                                        <p className="mb-0">
                                            <a className="badge">Engineer</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="job-body">
                                    <h4 className="job-title">
                                        <a className="job-title-link">{companyReview.role}</a>
                                    </h4>

                                    <div className="d-flex align-items-center">
                                        <div className="job-image-wrap d-flex align-items-center bg-white shadow-lg mt-2 mb-4">
                                            <img src="images/logos/salesforce.png" className="job-image me-3 img-fluid" alt=""></img>

                                            <p className="mb-0">{companyReview.company}</p>
                                        </div>

                                        <a href="#" className="bi-bookmark ms-auto me-2">
                                        </a>

                                        <a href="#" className="bi-heart">
                                        </a>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <p className="job-location">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            {companyReview.location}
                                        </p>

                                        <p className="job-date">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            {companyReview.duration}
                                        </p>
                                    </div>

                                    <div className="d-flex align-items-center border-top pt-3">
                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            {companyReview.salary}
                                        </p>

                                        <a onClick={() => {handleReviewData(companyReview._id)}} className="custom-btn btn ms-auto">Read now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                          ))}
                    </div>
                </div>
            </section>


    </>
  );
};

export default CompanyDetails;
