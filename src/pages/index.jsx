import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'app/Layout';
import ImageTwoUp from 'app/ImageTwoUp';
import CardPanel from '../app/CardPanel';

const IndexPage = ({ data }) => {
  console.log('pageData', JSON.stringify(data, null, 2));
  const {
    firstName,
    lastName,
    homePagePanels,
    experiencePanels,
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
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

// <CardPanel panels={experiencePanels} />

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
            firstName
            lastName
            homePagePanels {
              imgSrc
              imgSide
              text
            }
            experiencePanels {
              title
              text
            }
          }
        }
      }
    }
  }
`;
