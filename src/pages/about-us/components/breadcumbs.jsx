import React from 'react';
import { Link } from 'react-router-dom';

import './css/breadcrumb.css'


const BreadCumb = () => {
    return ( 
        <div className="bread-cumb">
            <div className="gray py-3">
                <div className="container">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <nav aria-label="breadcrums">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default BreadCumb;