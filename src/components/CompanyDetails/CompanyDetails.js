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
    <header class="site-header">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white">Listed Reviews</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a>Home</a></li>

                                    <li class="breadcrumb-item active" aria-current="page">Explore</li>

                                    <li class="breadcrumb-item active" aria-current="page">ReviewsList</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
    <section class="job-section recent-jobs-section section-padding">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-lg-6 col-12 mb-4">
                            <h2>Recent Interview Experiences</h2>

                            <p><strong>Over 100s of engineers</strong> have provided their valuable interview experience for students to learn and avoid any unnecessarry mistakes and prepare well for their company rounds.</p>
                        </div>

                        <div class="clearfix"></div>
                        {companyReviews.map((companyReview, index) => (
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="job-thumb job-thumb-box">
                                <div class="job-image-box-wrap">
                                        <img src={photo} class="job-image img-fluid" alt=""></img>

                                    <div class="job-image-box-wrap-info d-flex align-items-center">
                                        <p class="mb-0">
                                            <a class="badge badge-level">{companyReview.type}</a>
                                        </p>

                                        <p class="mb-0">
                                            <a class="badge">Engineer</a>
                                        </p>
                                    </div>
                                </div>

                                <div class="job-body">
                                    <h4 class="job-title">
                                        <a class="job-title-link">{companyReview.role}</a>
                                    </h4>

                                    <div class="d-flex align-items-center">
                                        <div class="job-image-wrap d-flex align-items-center bg-white shadow-lg mt-2 mb-4">
                                            <img src="images/logos/salesforce.png" class="job-image me-3 img-fluid" alt=""></img>

                                            <p class="mb-0">{companyReview.company}</p>
                                        </div>

                                        <a href="#" class="bi-bookmark ms-auto me-2">
                                        </a>

                                        <a href="#" class="bi-heart">
                                        </a>
                                    </div>

                                    <div class="d-flex align-items-center">
                                        <p class="job-location">
                                            <i class="custom-icon bi-geo-alt me-1"></i>
                                            {companyReview.location}
                                        </p>

                                        <p class="job-date">
                                            <i class="custom-icon bi-clock me-1"></i>
                                            {companyReview.duration}
                                        </p>
                                    </div>

                                    <div class="d-flex align-items-center border-top pt-3">
                                        <p class="job-price mb-0">
                                            <i class="custom-icon bi-cash me-1"></i>
                                            {companyReview.salary}
                                        </p>

                                        <a onClick={() => {handleReviewData(companyReview._id)}} class="custom-btn btn ms-auto">Read now</a>
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
