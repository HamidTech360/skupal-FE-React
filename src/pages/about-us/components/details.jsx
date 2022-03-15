import React from 'react';
import './css/details.css'

const Details = () => {
    return ( 
        <div className="details">
            <section className="middle">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="abt_caption">
                                <h2 className="ft-medium mb-4">We Are Simply Redefining The Freelancing Experience.</h2>
                                <p className="mb-4">Skupal is a global platform designed to help you grow and succeed as a freelancer keeping you afloat in times of need and helping you plan for the future in times of abundance.</p>
                                <p className="mb-4">Along side the Numerous amount of payed tasks available on our platform, we give you exclusive access to other services specifically designed for you as a freelancer.</p>
                                <p className="mb-4">These exclusive services includes Peer to peer lending and Investments for freelancers.</p>
                            
                                <div className="form-group mt-4">
                                    <a href="#" className="btn theme-bg text-white">See More Info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="abt_caption">
                                <img src="../../../assets/about-1.png" className="img-fluid rounded" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="middle">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="abt_caption">
                                <img src="../../../assets/about-2.png" className="img-fluid rounded" alt="" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="abt_caption">
                                <h2 className="ft-medium mb-4">How It Works?</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p className="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                                <div className="form-group mt-4">
                                    <a href="#" className="btn theme-bg text-white">Learn More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Details;