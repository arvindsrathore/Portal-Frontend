import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance.js';

const ReviewDetails = () => {
  const { reviewId } = useParams();
  console.log("herer it is")
  console.log(reviewId);
  const [Review, setReview] = useState(null);

  const getReview = async() => {
    await axios.get(`/explore/reviewdetails/${reviewId}`)
      .then(response => {
        const data = response.data.message;
        console.log(data)
        setReview(data)
      })
      .catch(e => {
        console.log('Error fetching Review details')
      })
  }

  useEffect(() => {
    getReview();
  }, [reviewId]);

  return (
    <>
    <header class="site-header">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white">Read Review</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li class="breadcrumb-item active" aria-current="page">Explore</li>

                                    <li class="breadcrumb-item active" aria-current="page">ReviewsList</li>

                                    <li class="breadcrumb-item active" aria-current="page">Reviews</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>

            <section class="job-section section-padding pb-0">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12">
                            <h2 class="job-title mb-0">{Review?.role}</h2>

                            <div class="job-thumb job-thumb-detail">
                                <div class="d-flex flex-wrap align-items-center border-bottom pt-lg-3 pt-2 pb-3 mb-4">
                                    <p class="job-location mb-0">
                                        <i class="custom-icon bi-geo-alt me-1"></i>
                                        {Review?.location}
                                    </p>

                                    <p class="job-date mb-0">
                                        <i class="custom-icon bi-clock me-1"></i>
                                        {Review?.duration}
                                    </p>

                                    <p class="job-price mb-0">
                                        <i class="custom-icon bi-cash me-1"></i>
                                        {Review?.salary}
                                    </p>

                                    <div class="d-flex">
                                        <p class="mb-0">
                                            <a class="badge badge-level">Internship</a>
                                        </p>

                                        <p class="mb-0">
                                            <a class="badge">Freelance</a>
                                        </p>
                                    </div>
                                </div>

                                <h4 class="mt-4 mb-2">Job Description</h4>

                                <p>{Review?.content}</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12 mt-5 mt-lg-0">
                            <div class="job-thumb job-thumb-detail-box bg-white shadow-lg">
                                <div class="d-flex align-items-center">
                                    <div class="job-image-wrap d-flex align-items-center bg-white shadow-lg mb-3">
                                        <img src="images/logos/google.png" class="job-image me-3 img-fluid" alt=""></img>

                                        <p class="mb-0">{Review?.company}</p>
                                    </div>

                                    <a href="#" class="bi-bookmark ms-auto me-2"></a>

                                    <a href="#" class="bi-heart"></a>
                                </div>

                                <h6 class="mt-3 mb-2">About the Company</h6>

                                <p>Big companies, often referred to as multinational corporations or conglomerates, wield significant influence globally due to their extensive resources, diversified portfolios, and widespread operations...</p>

                                <h6 class="mt-4 mb-3">Contact Information</h6>

                                <p class="mb-2">
                                    <i class="custom-icon bi-globe me-1"></i>

                                    <a href="#" class="site-footer-link">
                                        {Review?.author}
                                    </a>
                                </p>

                                <p>
                                    <i class="custom-icon bi-envelope me-1"></i>

                                    <a href="mailto:info@yourgmail.com" class="site-footer-link">
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
