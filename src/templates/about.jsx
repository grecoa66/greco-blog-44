import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/base/Layout';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AboutPageWrapper = styled.div`
  background-color: white;
  height: 100%;
  width: auto;
  border: 1px solid red;
`;

const AboutPageTemplate = ({ name, bio }) => {
  return (
    <Layout>
      <AboutPageWrapper>
        <h1>This is the About Page!</h1>
        <h2>{name}</h2>
        <h3>{bio}</h3>
      </AboutPageWrapper>
    </Layout>
  );
};

const AboutPage = ({ data }) => {
  const { name, bio } = data.allMarkdownRemark.edges[0].node.frontmatter;
  return <AboutPageTemplate name={name} bio={bio} />;
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default AboutPage;

export const resumePageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "about" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            bio
          }
        }
      }
    }
  }
`;
