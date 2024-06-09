import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="d-flex align-items-center mb-4">
                            <img src="images/logo.png" className="img-fluid logo-image"></img>

                            <div className="d-flex flex-column">
                                <strong className="logo-text">EXSP</strong>
                                <small className="logo-slogan">Exp Share Portal</small>
                            </div>
                        </div>  

                        <p className="mb-2">
                            <i className="custom-icon bi-globe me-1"></i>

                            <a href="#" className="site-footer-link">
                                www.esp.com
                            </a>
                        </p>

                        <p className="mb-2">
                            <i className="custom-icon bi-telephone me-1"></i>

                            <a  className="site-footer-link">
                                305-240-9671
                            </a>
                        </p>

                        <p>
                            <i className="custom-icon bi-envelope me-1"></i>

                            <a  className="site-footer-link">
                                info@esportal.co
                            </a>
                        </p>

                    </div>

                    <div className="col-lg-2 col-md-3 col-6 ms-lg-auto">
                        <h6 className="site-footer-title">Company</h6>

                        <ul className="footer-menu">
                            <li className="footer-menu-item"><Link to="/about" className="footer-menu-link">About</Link></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Blog</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Jobs</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 col-6">
                        <h6 className="site-footer-title">Resources</h6>

                        <ul className="footer-menu">
                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Guide</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">How it works</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Salary Tool</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
                        <h6 className="site-footer-title">Newsletter</h6>

                        <form className="custom-form newsletter-form" action="#" method="post" role="form">
                            <h6 className="site-footer-title">Get notified jobs news</h6>

                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="bi-person"></i></span>

                                <input type="text" name="newsletter-name" id="newsletter-name" className="form-control" placeholder="yourname@gmail.com" required></input>

                                <button type="submit" className="form-control">
                                    <i className="bi-send"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-12 d-flex align-items-center">
                            <p className="copyright-text">Copyright © ArvindSRathore</p>

                            <ul className="footer-menu d-flex">
                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy Policy</a></li>

                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Terms</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-5 col-12 mt-2 mt-lg-0">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-twitter"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-linkedin"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-youtube"></a>
                                </li>
                            </ul>
                        </div>

                        <a className="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center" href="#top"></a>

                    </div>
                </div>
            </div>
        </footer>
        
        </>
    );
}