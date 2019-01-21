/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import JobTitle from '../components/resume/JobTitle'

export const ResumePageTemplate = ({jobs, title}) => {
    console.log('jobs : ', jobs);
    return (
        <section className="content">
            <h2>{title}</h2>
            {jobs.map(job => (
               <JobTitle job={job}/>
            ))}
        </section>
    )
}

ResumePageTemplate.PropTypes = {
    title: PropTypes.string.isRequired,
    jobs: PropTypes.array.isRequired,
}


const ResumePage = ({data}) => {
    const {markdownRemark} = data;
    const {jobTitle, title} = markdownRemark.frontmatter;
    console.log("Remark in resume", data);
    return(
        <Layout>
            <ResumePageTemplate 
                jobs={jobTitle}
                title={title}    
            />
        </Layout>
    )
}

export default ResumePage

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
`