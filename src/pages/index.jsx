import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Homepage from 'templates/homePage';
import Layout from 'components/base/Layout';

const IndexPage = ({ data }) => {
  const {
    firstName, 
    lastName
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <h1>{`${firstName} ${lastName}`}</h1>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homePage" } } }
    ) {
      edges {
        node {
          frontmatter {
            firstName
            lastName
          }
        }
      }
    }
  }
`;
