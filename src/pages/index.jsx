import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Homepage from 'templates/homePageTemplate';
import Layout from 'components/base/Layout';
import FontPreloader from 'fonts/FontPreloader';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FontPreloader />
        <Homepage />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "resume-page" } } }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
