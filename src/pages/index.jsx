import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'app/Layout';
import ImageTwoUp from 'app/ImageTwoUp';

const IndexPage = ({ data }) => {
  const { homePagePanels } = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      {homePagePanels.map(panel => {
        const { text, imgSrc, imgSide } = panel;
        return (
          <ImageTwoUp
            key={imgSrc + text}
            imgSrc={imgSrc}
            imgSide={imgSide}
            text={text}
          />
        );
      })}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
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
            homePagePanels {
              imgSrc
              imgSide
              text
            }
          }
        }
      }
    }
  }
`;
