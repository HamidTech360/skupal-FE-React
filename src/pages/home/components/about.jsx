import React from 'react';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const About = () => {
    return ( 
        <div className="about">
            <section className="space">
                <div className="container">

                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="m-spaced">
                                <div className="position-relative">
                                    <div className="mb-1"><span className="theme-bg-light theme-cl px-2 py-1 rounded">For Task Providers</span></div>
                                    <h2 className="ft-bold mb-3">Want to <br/>get your job done?</h2>
                                    <p className="mb-2">Skupal takes the extra mile to make sure you are connected with the best professionals who get the job done at affordable rates. No Hiccups, avoid boshed deadlines and source for the best freelancers across the globe.</p>
                                    <p className="mb-4">Join other task providers today and get access to a wide pool of talents ready to take up your task and delivery it with ease. </p>
                                </div>
                                <div className="position-relative row">
                                    <div className="col-lg-4 col-md-4 col-4">
                                        <h3 className="ft-bold theme-cl mb-0">10k+</h3>
                                        <p className="ft-medium">Active Tasks</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-4">
                                        <h3 className="ft-bold theme-cl mb-0">500+</h3>
                                        <p className="ft-medium">Freelancers</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-4">
                                        <h3 className="ft-bold theme-cl mb-0">80+</h3>
                                        <p className="ft-medium">Task Providers</p>
                                    </div> 
                                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                                        <a href="https://forms.gle/oqw5rUs92AfenhbM8"  target="_blank" className="btn btn-md theme-bg-light rounded theme-cl hover-theme">Become a Task Provider<BsFillArrowRightCircleFill/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="position-relative">
                                <img src="../../../assets/bn-5.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
            <section className="space pt-0">
                <div className="container">

                    <div className="row align-items-center justify-content-between">

                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="position-relative">
                                <img src="../../assets/bn-4.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="m-spaced">
                                <div className="position-relative">
                                    <div className="mb-1"><span className="theme-bg-light theme-cl px-2 py-1 rounded">For Freelancers</span></div>
                                    <h2 className="ft-bold mb-3">Get All The Freedom <br/>You're Looking For</h2>
                                    <p className="mb-3">Looking for a freelancing platform that feels like home? Skupal offers you a not just gigs but a range of solutions from microloans, to investment opportunities ensuring your journey as a freelancing professional is truly free.
                                        Enjoy a redefined freelancing experience, sign up now!</p>
                                </div>
                                <div className="position-relative row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <h6 className="mb-0 ml-3">Very Competitive Commission.</h6>
                                            </div>
                                        </div>
                                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <h6 className="mb-0 ml-3">Multiple Payout Options (Including Crypto).</h6>
                                            </div>
                                        </div>
                                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <h6 className="mb-0 ml-3">Access to P2P microloans.</h6>
                                            </div>
                                        </div>
                                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <h6 className="mb-0 ml-3">Smart Investment Options.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 mt-4">
                                        <a href="https://forms.gle/vBFKtxMf7fJC5fZZ9" target="_blank" className="btn btn-md theme-bg rounded text-white hover-theme">Get Started<i className="fa fa-arrow-right ml-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
     );
}
 
export default About;