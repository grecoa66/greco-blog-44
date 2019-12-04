import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Homepage from 'templates/homePage';
import Layout from 'components/base/Layout';

const IndexTemplate = ({ heroText, subHeroText, homepageBlurb }) => {
  return (
    <Layout>
      <Homepage
        key={heroText}
        heroText={heroText}
        subHeroText={subHeroText}
        homepageBlurb={homepageBlurb}
      />
    </Layout>
  );
};

const IndexPage = ({ data }) => {
  const {
    heroText,
    subHeroText,
    homepageBlurb
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <IndexTemplate
      heroText={heroText}
      subHeroText={subHeroText}
      homepageBlurb={homepageBlurb}
    />
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
            heroText
            subHeroText
            homepageBlurb {
              blurbText
            }
          }
        }
      }
    }
  }
`;
