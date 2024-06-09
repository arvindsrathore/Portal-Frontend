import React from 'react'

function About() {
  return (
    <>
    <main  class="about-page" id="top">
          <header class="site-header">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white">About Portal</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li class="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
            <section class="about-section">
                <div class="container">
                    <div class="row justify-content-center align-items-center">

                        <div class="col-lg-5 col-12">
                            <div class="about-info-text">
                                <h2 class="mb-0">Introducing Gotto Job</h2>

                                <h4 class="mb-2">Get hired. Get your new job</h4>

                                <p>Thank you for visiting our Gotto Job website. Are you looking for best HTML templates? Please visit Tooplate website to download free templates.</p>

                                <div class="d-flex align-items-center mt-4">
                                    <a href="#services-section" class="custom-btn custom-border-btn btn me-4">Explore Services</a>

                                    <a href="contact.html" class="custom-link smoothscroll">Contact</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 mt-5 mt-lg-0">
                            <div class="about-image-wrap">
                                <img src="images/horizontal-shot-happy-mixed-race-females.jpg" class="about-image about-image-border-radius img-fluid" alt=""></img>

                                <div class="about-info d-flex">
                                    <h4 class="text-white mb-0 me-2">20</h4>

                                    <p class="text-white mb-0">years of experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            </main>
    </>
  )
}

export default About