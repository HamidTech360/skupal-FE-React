import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer-light">
        <footer className="light-footer skin-light-footer style-2">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="footer_widget">
                                <img src="assets/img/logo.png" className="img-footer small mb-2" alt="" />

                                <div className="address mt-2">
                                    Obafemi Awolowo University, Ile-Ife <br/>Osun, Nigeria
                                </div>
                                <div className="address mt-3">
                                    +2348163471885<br/>support@skupal.com
                                </div>
                                <div className="address mt-2">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to="#" className="theme-cl"><i className="fa fa-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="theme-cl"><i className="fa fa-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="theme-cl"><i className="fa fa-youtube"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="theme-cl"><i className="fa fa-instagram"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="theme-cl"><i className="fa fa-linkedin-original"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <div className="footer_widget">
                                <h4 className="widget_title">For Task Providers</h4>
                                <ul className="footer-menu">
                                    <li><Link to="#">Explore Freelancers</Link></li>
                                    <li><Link to="#">Task Pricing</Link></li>
                                    <li><Link to="#">Submit Task</Link></li>
                                    <li><Link to="#">Shortlisted</Link></li>
                                    <li><Link to="#">Dashboard</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <div className="footer_widget">
                                <h4 className="widget_title">For Freelancers</h4>
                                <ul className="footer-menu">
                                    <li><Link to="#">Explore All Tasks</Link></li>
                                    <li><Link to="#">Browse Categories</Link></li>
                                    <li><Link to="#">Saved Tasks</Link></li>
                                    <li><Link to="#">Dashboard</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <div className="footer_widget">
                                <h4 className="widget_title">About Company</h4>
                                <ul className="footer-menu">
                                    <li><Link to="#">Who We'r?</Link></li>
                                    <li><Link to="#">Our Mission</Link></li>
                                    <li><Link to="#">Our team</Link></li>
                                    <li><Link to="#">Packages</Link></li>
                                    <li><Link to="#">Dashboard</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <div className="footer_widget">
                                <h4 className="widget_title">Helpful Topics</h4>
                                <ul className="footer-menu">
                                    <li><Link to="#">Site Map</Link></li>
                                    <li><Link to="#">Security</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">FAQ's Page</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom br-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 text-center">
                            <p className="mb-0">© 2022 Skupal Technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
     );
}
 
export default Footer;