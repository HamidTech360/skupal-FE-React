import React from 'react';
import JobCategoryCard from './job-categ-card';

const JobCategories = () => {
    return ( 
        <div className="job-categories">
            <section className="bg-cover" style={{background:'#6654F0 url(../../../assets/curve.svg)no-repeat'}} >
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                            <div className="sec_title position-relative text-center mb-5">
                                <h6 className="text-light mb-0">Tasks Categories</h6>
                                <h2 className="ft-bold text-light">We Have More Than 500+ Tasks spread across different Categories</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                            <div className="row justify-content-center">
                                
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Web Designing"
                                        number="100"
                                        img="c-9.png"
                                    />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Content Writing"
                                        number="102"
                                        img="c-10.png"
                                    /> 
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Graphics Design"
                                        number="162"
                                        img="c-11.png"
                                    /> 
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Virtual Assistant"
                                        number="132"
                                        img="c-2.png"
                                    /> 
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Trasnalation"
                                        number="982"
                                        img="c-16.png"
                                    /> 
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="Data Entry"
                                        number="112"
                                        img="c-4.png"
                                    /> 
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <JobCategoryCard
                                        title="App Development"
                                        number="112"
                                        img="c-3.png"
                                    /> 
                                </div>
                      
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ht-50"></div>
            </section>
        </div>
     );
}
 
export default JobCategories;