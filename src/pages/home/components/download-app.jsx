import React from 'react';

const DownloadApp = () => {
    return ( 
        <div className="download-app">
            <section>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_2 pr-3 py-4">
                                <div className="content-box">
                                    <div className="sec-title light">
                                        <p className="theme-cl px-3 py-1 rounded bg-light-success d-inline-flex">Mobile App For Freelancers (Coming Soon)</p>
                                        <h2 className="ft-bold">Get the Skupal Task<br/>Explorer App</h2>
                                    </div>
                                    <div className="text">
                                        <p>Seemlesly search for various tasks, apply, track and receive payments for completed tasks in our Android & iOS apps.</p>
                                    </div>
                                    <div className="btn-box clearfix mt-5">
                                        <a href="index.html" className="download-btn play-store mb-1 d-inline-flex"><img src="../../../assets/ios.png" width="200" alt="" /></a>
                                        <a href="index.html" className="download-btn play-store ml-2 mb-1 d-inline-flex"><img src="../../../assets/and.png" width="200" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="../../../assets/app.png" className="img-fluid" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default DownloadApp;