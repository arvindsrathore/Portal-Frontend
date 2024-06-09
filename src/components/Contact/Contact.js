import React from 'react'

function Contact() {
  return (
    <>
    
    <header className="site-header">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="text-white">Get in touch</h1>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a>Home</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>


            <section className="contact-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-5 col-12 mb-3 mx-auto">
                            <div className="contact-info-wrap">
                                <div className="contact-info d-flex align-items-center mb-3">
                                    <i className="custom-icon bi-building"></i>

                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Office</span>

                                        Army Institute of Technology, Pune
                                    </p>
                                </div>

                                <div className="contact-info d-flex align-items-center">
                                    <i className="custom-icon bi-globe"></i>

                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Website</span>

                                        <a href="#" className="site-footer-link">
                                            www.exsp.co
                                        </a>
                                    </p>
                                </div>

                                <div className="contact-info d-flex align-items-center">
                                    <i className="custom-icon bi-telephone"></i>

                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Phone</span>

                                        <a className="site-footer-link">
                                            305-240-9671
                                        </a>
                                    </p>
                                </div>

                                <div className="contact-info d-flex align-items-center">
                                    <i className="custom-icon bi-envelope"></i>

                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Email</span>

                                        <a className="site-footer-link">
                                            info@exsportal.co
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-8 col-12 mx-auto">
                            <form className="custom-form contact-form" action="#" method="post" role="form">
                                <h2 className="text-center mb-4">Project in mind? Let’s Talk</h2>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <label for="first-name">Full Name</label>

                                        <input type="text" name="full-name" id="full-name" className="form-control" placeholder="Jack Doe" required></input>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <label for="email">Email Address</label>

                                         <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com" required></input>
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <label for="message">Message</label>

                                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="What can we help you?"></textarea>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-6 mx-auto">
                                        <button type="submit" className="form-control">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div> */}

                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Contact