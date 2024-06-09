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
                                            <a href="job-listings.html" class="badge badge-level">Internship</a>
                                        </p>

                                        <p class="mb-0">
                                            <a href="job-listings.html" class="badge">Freelance</a>
                                        </p>
                                    </div>
                                </div>

                                <h4 class="mt-4 mb-2">Job Description</h4>

                                <p>{Review?.content}</p>

                                {/* <h5 class="mt-4 mb-3">The Role</h5>

                                <p class="mb-1"><strong>Benefits:</strong> Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit</p>

                                <p><strong>Good salary:</strong> Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>

                                <h5 class="mt-4 mb-3">Requirements</h5>

                                <ul>
                                    <li>Strong knowledge in computing skill</li>

                                    <li>Minimum 5 years of working experiences consectetur omeg</li>

                                    <li>Excellent interpersonal skills</li>
                                </ul>

                                <div class="d-flex justify-content-center flex-wrap mt-5 border-top pt-4">
                                    <a href="#" class="custom-btn btn mt-2">Apply now</a>

                                    <a href="#" class="custom-btn custom-border-btn btn mt-2 ms-lg-4 ms-3">Save this job</a>

                                    <div class="job-detail-share d-flex align-items-center">
                                        <p class="mb-0 me-lg-4 me-3">Share:</p>

                                        <a href="#" class="bi-facebook"></a>

                                        <a href="#" class="bi-twitter mx-3"></a>

                                        <a href="#" class="bi-share"></a>
                                    </div>
                                </div> */}
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
                                        {Review?.auther}
                                    </a>
                                </p>

                                <p>
                                    <i class="custom-icon bi-envelope me-1"></i>

                                    <a href="mailto:info@yourgmail.com" class="site-footer-link">
                                        {Review?.auther}
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

    </>
    //   {companyReviews.map((companyReview, index) => (
    //       <div style = {centerStyle} class="col-lg-8 col-12">
    //           <div class="custom-text-block">
    //               <h3 class="text-white mb-2" >{companyReview.role} - ({companyReview.type})</h3>

    //               <p class="text-white">{companyReview.content}  website.</p>

    //               <div class="custom-border-btn-wrap d-flex align-items-center mt-5">
    //                   <a href="#" class="custom-btn custom-border-btn btn me-4">{companyReview.duration}</a>

    //                   <a href="#" class="custom-link smoothscroll">{companyReview.auther}</a>
    //               </div>
    //           </div>
    //       </div>
    //   ))}
  );
};

export default ReviewDetails;
