import React from 'react';
import './JobInfo.scss';
function JobInfo(props) {
    const { info } = props;
    const { type, title, company, location, company_logo } = info;
    return (
        <div className="job-wrapper">
            <img src={company_logo} />
            <div className="dull-text">. {type}</div>
            <div>{title}</div>
            <div className="dull-text">{company}</div>
            <div className="location">{location}</div>
        </div>
    );
}

export default JobInfo;
