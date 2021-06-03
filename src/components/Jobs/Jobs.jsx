import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsList } from './../../actions';
import JobInfo from './../JobInfo';
import './Jobs.scss';
import FilterSection from './../FilterSection';

function Jobs() {
    const dispatch = useDispatch();
    const jobsList = useSelector((state) => state.jobs.jobsList);

    useEffect(() => {
        dispatch(getJobsList());
    }, [dispatch]);

    return (
        <div className="jobs-wrapper-main">
            <div className="jobs-filter">
                <FilterSection />
            </div>
            <div className="jobs-wrapper">
                {jobsList && jobsList.length > 0 ? (
                    jobsList.map((job) => {
                        return <JobInfo info={job} key={job.id} />;
                    })
                ) : (
                    <div>empty</div>
                )}
            </div>
        </div>
    );
}

export default Jobs;
