import React from 'react';

const JobCategoryCard = ({img, title, number}) => {
    return ( 
        <div className="job-categ-card">
            <div className="cats-wrap text-left">
                <a href="task-search-v1.html" className="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
                    <div className="text-center"><img src={`../../../assets/${img}`} className="img-fluid" width="55" alt=""/></div>
                    <div className="cats-box-caption px-2">
                        <h4 className="fs-md mb-0 ft-medium">{title}</h4>
                        <span className="text-muted">{number} Tasks</span>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default JobCategoryCard;