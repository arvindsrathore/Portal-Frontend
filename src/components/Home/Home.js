import React from 'react'
import Explore from '../Explore/Explore'
import { Link } from 'react-router-dom';
import photo3 from './../../assets/images/multiracial-hr-reading-resume-millennial-job-applicant-interview_1163-4644.jpg';
import photo2 from './../../assets/images/professional-asian-businesswoman-gray-blazer.jpg';
import photo1 from './../../assets/images/10306566.jpg';
// import one from './../../assets/images/avatar/blond-man-happ y-expression.jpg';
// import two from './../../assets/images/avatar/medium-shot-smiley-senior-man.jpg';
// import three from './../../assets/images/avatar/portrait-beautiful-young-woman.jpg';
// import four from './../../assets/images/avatar/portrait-charming-middle-aged-attractive-woman-with-blonde-hair.jpg';
// import five from './../../assets/images/avatar/university-study-abroad-lifestyle-concept.jpg';
// import quote from './../../assets/images/left-quote.png'

function Home() {
  return (
    <div>
        <main>
            <section class="hero-section d-flex justify-content-center align-items-center">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div class="hero-section-text mt-5">
                                <h6 class="text-white">Are you looking for guidance about your next company interview?</h6>

                                <h1 class="hero-title text-white mt-4 mb-4">Experience Sharing Portal (ESP)</h1>

                                <a href="#categories-section" class="custom-btn custom-border-btn btn">Browse Categories</a>
                            </div>
                        </div>

                        </div>
                </div>
            </section>

            <section class="about-section"style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 col-12">
                            <div class="about-image-wrap custom-border-radius-start">
                                <img src={photo2} class="about-image custom-border-radius-start img-fluid" alt=""></img>

                                <div class="about-info">
                                    <h4 class="text-white mb-0 me-2">Ms. Nobody</h4>

                                    <p class="text-white mb-0">Investor</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="custom-text-block">
                                <h2 class="text-white mb-2">Introduction ESP</h2>

                                <p class="text-white">ESP aims to provide a platform for individuals to share their experiences and insights gained from coding rounds or interview processes with various companies.<a href="https://www.tooplate.com" target="_parent">Tooplate website</a>. Images are from <a href="https://www.freepik.com/" target="_blank">FreePik</a> website.</p>

                                <div class="custom-border-btn-wrap d-flex align-items-center mt-5">
                                    <Link to="/contact" class="custom-btn custom-border-btn btn me-4">Get to know us</Link>

                                    <Link to="/explore" class="custom-link smoothscroll">Explore Jobs</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-12">
                            <div class="instagram-block">
                                <img src={photo1} class="about-image custom-border-radius-end img-fluid" alt=""></img>

                                <div class="instagram-block-text">
                                    <a href="https://instagram.com/" class="custom-btn btn">
                                        <i class="bi-instagram"></i>
                                        @ESP
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <div class="custom-text-block custom-border-radius-start">
                                <h2 class="text-white mb-3">ESP helps you make your career path easy</h2>

                                <p class="text-white"> The core idea is to facilitate knowledge-sharing among candidates, helping them prepare more effectively for similar rounds and ultimately increase their chances of success in landing desired positions.</p>

                                
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="video-thumb">
                                <img src={photo3} class="about-image custom-border-radius-end img-fluid" alt=""></img>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section class="reviews-section section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <h2 class="text-center mb-5">Happy customers</h2>

                            <div class="owl-carousel owl-theme reviews-carousel">
                                <div class="reviews-thumb">
                                
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src={one} class="avatar-image img-fluid" alt=""></img>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Susan L</strong>
                                                <small>Product Manager</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src={quote} class="quote-icon img-fluid" alt=""></img>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src={two} class="avatar-image img-fluid" alt=""></img>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Jack</strong>
                                                <small>Technical Lead</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star"></i>
                                                <i class="bi-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src={quote} class="quote-icon img-fluid" alt=""></img>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">

                                    <div class="reviews-info d-flex align-items-center">
                                        <img src={{three}} class="avatar-image img-fluid" alt=""></img>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Haley</strong>
                                                <small>Sales & Marketing</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src={quote} class="quote-icon img-fluid" alt=""></img>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src={four} class="avatar-image img-fluid" alt=""></img>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Jackson</strong>
                                                <small>Dev Ops</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star"></i>
                                                <i class="bi-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src={quote} class="quote-icon img-fluid" alt=""></img>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src={five} class="avatar-image img-fluid" alt=""></img>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Kevin</strong>
                                                <small>Internship</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src={quote} class="quote-icon img-fluid" alt=""></img>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </main>
    </div>
  )
}

export default Home