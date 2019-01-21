import React, { Fragment } from 'react';

const JobTitle = ({job}) => {
    return (
        <Fragment>
            <h2>{job.company}</h2>
            <h3>{job.employmentDates}</h3>
            <h3>{job.position}</h3>
        </Fragment>
    )
}

export default JobTitle;