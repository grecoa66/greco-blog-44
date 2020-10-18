import React from 'react';
import PropTypes from 'prop-types';
import JobTitle from 'app/resume/JobTitle';
import { graphql } from 'gatsby';

const ResumePageTemplate = ({ jobs, title }) => {
  return (
    <section className="content">
      <h2>{title}</h2>
      {jobs.map((job) => (
        <JobTitle key={job.company} job={job} />
      ))}
    </section>
  );
};

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.array.isRequired,
};

const Resume = ({ data }) => {
  const { markdownRemark } = data;
  const { jobTitle, title } = markdownRemark.frontmatter;
  return <ResumePageTemplate jobs={jobTitle} title={title} />;
};

export default Resume;

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
        jobTitle {
          company
          employmentDates
          position
        }
      }
    }
  }
`;
