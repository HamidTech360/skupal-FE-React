import React from 'react';

import 'font-awesome/css/font-awesome.css';

const Banner = () => {
    return ( 
        <div className="banner">
            <div className="home-banner margin-bottom-0 intro-bg">
                <div className="container">

                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="banner_caption text-left mb-4">
                                <div className="d-block mb-2"><span className="px-3 py-1 medium theme-bg-light theme-cl rounded">Redefining the freelancing experience</span></div>
                                <h1 className="banner_title ft-bold mb-1">Explore More Than<br/><span className="theme-cl">500</span> Tasks</h1>
                                <p className="fs-md ft-regular">Skupal gives you access to a wide range of tasks,credit & investment options as a FREELANCER and good number of qualified talents for your projects as a TASK PROVIDER.</p>
                            </div>
                            <div className="text-center align-items-center justify-content-center mt-5">
                                <a href="https://forms.gle/oqw5rUs92AfenhbM8"  target="_blank" className="btn bg-white hover-theme ft-regular mr-1"><i className="fa fa-upload" style={{marginRight:'10px'}}></i> Become a Task Provider</a>
                                <a href="https://forms.gle/vBFKtxMf7fJC5fZZ9" target="_blank" className="btn bg-dark hover-theme text-light ft-regular ml-1"><i className="fa fa-file-archive-o" style={{marginRight:'10px'}}></i> Join Freelancers Waitlist</a>
                            </div>
                        
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="bnr_thumb position-relative">
                                <img src="../../../assets/about-1.png" className="img-fluid bnr_img" alt="" />
                                <div className="list_crs_img">
                                    <img src="../../../assets/img-1.png" className="img-fluid elsio cirl animate-fl-y" alt=""/>
                                    <img src="../../../assets/img-3.png" className="img-fluid elsio arrow animate-fl-x" alt=""/>
                                    <img src="../../../assets/img-2.png" className="img-fluid elsio moon animate-fl-x" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="p-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="crp_box fl_color ovr_top">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="dro_140">
                                            <div className="dro_141 de"><i className="fa fa-book"></i></div>
                                            <div className="dro_142">
                                                <h6>500+ Active tasks</h6>
                                                <p>Numerous task requests in different categories patiently waiting to be fulfilled.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="dro_140">
                                            <div className="dro_141 de"><i className="fa fa-user-o"></i></div>
                                            <div className="dro_142">
                                                <h6>150+ Freelancers</h6>
                                                <p>Good number of verified expert freelancers waiting to pickup their next gig.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="dro_140">
                                            <div className="dro_141 de"><i className="fa fa-user"></i></div>
                                            <div className="dro_142">
                                                <h6>80+ Task Providers</h6>
                                                <p>Companies and busy Individuals outsouring their tasks on a daily basis.</p>
                                            </div>
                                        </div>
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
 
export default Banner;