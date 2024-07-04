import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance.js';

const ReviewDetails = () => {
  const { reviewId } = useParams();
  console.log(reviewId);
  const [Review, setReview] = useState(null);
  const [CompanyText, setCompanyText] = useState(null);

  const getReview = async () => {
    try {
      const response = await axios.get(`/explore/reviewdetails/${reviewId}`);
      const data = response.data.message;
      console.log(data);
      setReview(data);
    } catch (e) {
      console.log('Error fetching Review details');
    }
  };

  const getCompanyText = async () => {
    if (!Review){
        console.log('Error in Review fetching');
        return;
    }
    try {
      const response = await axios.post('/genAI/getResponse', { prompt: Review.company });
      const data = response.data.response;
      console.log(data);
      setCompanyText(data);
    } catch (e) {
      console.log('Error fetching Company details');
    }
  };

  useEffect(() => {
    getReview();
  }, [reviewId]);

  useEffect(() => {
    getCompanyText();
  }, [Review]);

  return (
    <>
    <header className="site-header">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="text-white">Read Review</h1>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">Explore</li>

                                    <li className="breadcrumb-item active" aria-current="page">ReviewsList</li>

                                    <li className="breadcrumb-item active" aria-current="page">Reviews</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>

            <section className="job-section section-padding pb-0">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12">
                            <h2 className="job-title mb-0">{Review?.role}</h2>

                            <div className="job-thumb job-thumb-detail">
                                <div className="d-flex flex-wrap align-items-center border-bottom pt-lg-3 pt-2 pb-3 mb-4">
                                    <p className="job-location mb-0">
                                        <i className="custom-icon bi-geo-alt me-1"></i>
                                        {Review?.location}
                                    </p>

                                    <p className="job-date mb-0">
                                        <i className="custom-icon bi-clock me-1"></i>
                                        {Review?.duration}
                                    </p>

                                    <p className="job-price mb-0">
                                        <i className="custom-icon bi-cash me-1"></i>
                                        {Review?.salary}
                                    </p>

                                    <div className="d-flex">
                                        <p className="mb-0">
                                            <a className="badge badge-level">Internship</a>
                                        </p>

                                        <p className="mb-0">
                                            <a className="badge">Freelance</a>
                                        </p>
                                    </div>
                                </div>

                                <h4 className="mt-4 mb-2">Job Description</h4>

                                <p>{Review?.content}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mt-5 mt-lg-0">
                            <div className="job-thumb job-thumb-detail-box bg-white shadow-lg">
                                <div className="d-flex align-items-center">
                                    <div className="job-image-wrap d-flex align-items-center bg-white shadow-lg mb-3">
                                        <img src="images/logos/google.png" className="job-image me-3 img-fluid" alt=""></img>

                                        <p className="mb-0">{Review?.company}</p>
                                    </div>

                                    <a href="#" className="bi-bookmark ms-auto me-2"></a>

                                    <a href="#" className="bi-heart"></a>
                                </div>

                                <h6 className="mt-3 mb-2">About the Company</h6>

                                <p>
                                    {CompanyText}
                                </p>

                                <h6 className="mt-4 mb-3">Contact Information</h6>

                                <p className="mb-2">
                                    <i className="custom-icon bi-globe me-1"></i>

                                    <a href="#" className="site-footer-link">
                                        {Review?.author}
                                    </a>
                                </p>

                                <p>
                                    <i className="custom-icon bi-envelope me-1"></i>

                                    <a href="mailto:info@yourgmail.com" className="site-footer-link">
                                        {Review?.author}
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  );
};

export default ReviewDetails;
