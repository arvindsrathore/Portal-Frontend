import React from 'react'
import Explore from '../Explore/Explore'
import { Link } from 'react-router-dom';
import photo3 from './../../assets/images/multiracial-hr-reading-resume-millennial-job-applicant-interview_1163-4644.jpg';
import photo2 from './../../assets/images/professional-asian-businesswoman-gray-blazer.jpg';
import photo1 from './../../assets/images/10306566.jpg';

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

                                <h1 class="hero-title text-white mt-4 mb-4">Experience Sharing Portal (EXSP)</h1>

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

        </main>
    </div>
  )
}

export default Home