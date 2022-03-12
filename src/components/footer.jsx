import React from 'react';

const FOoter = () => {
    return ( 
        <div className="footer">
            <footer className="dark-footer skin-dark-footer style-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widget">
                                    <img src="assets/img/logo-light.png" className="img-footer small mb-2" alt="" />

                                    <div className="address mt-2">
                                        Obafemi Awolowo University, Ile-Ife <br/>Osun, Nigeria
                                    </div>
                                    <div className="address mt-3">
                                        +2348163471885<br/>support@skupal.com
                                    </div>
                                    <div className="address mt-2">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" className="theme-cl"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="theme-cl"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="theme-cl"><i className="fa fa-youtube"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="theme-cl"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.linkedin.com/company/skupal/" className="fa fa-linkedin"><i className="lni lni-linkedin-original"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="footer_widget">
                                    <h4 className="widget_title">For Task Providers</h4>
                                    <ul className="footer-menu">
                                        <li><a href="#">Explore Freelancers</a></li>
                                        <li><a href="#">Task Pricing</a></li>
                                        <li><a href="#">Submit Task</a></li>
                                        <li><a href="#">Shortlisted</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="footer_widget">
                                    <h4 className="widget_title">For Freelancers</h4>
                                    <ul className="footer-menu">
                                        <li><a href="#">Explore All Tasks</a></li>
                                        <li><a href="#">Browse Categories</a></li>
                                        <li><a href="#">Saved Tasks</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="footer_widget">
                                    <h4 className="widget_title">About Company</h4>
                                    <ul className="footer-menu">
                                        <li><a href="#">Who We'r?</a></li>
                                        <li><a href="#">Our Mission</a></li>
                                        <li><a href="#">Our team</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="footer_widget">
                                    <h4 className="widget_title">Helpful Topics</h4>
                                    <ul className="footer-menu">
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">FAQ's Page</a></li>
                                        <li><a href="#">Privacy</a></li>
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
 
export default FOoter;