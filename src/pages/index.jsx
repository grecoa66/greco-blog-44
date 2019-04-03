import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/base/Layout';
import Row from 'components/base/Row';
import { CenteredBlock } from 'components/base/blocks';

import { Hero, HomepageContent } from 'components/homepage';
import HeroImage from '../img/pexels-photo.jpg';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero imgSrc={HeroImage} />
        <HomepageContent>
          <Row backgroundColor={'green'}>
            <CenteredBlock colStart={1} colEnd={5}>
              <h1>Hello! This is the index page.</h1>
            </CenteredBlock>
          </Row>
          <Row>
            <CenteredBlock colStart={1} colEnd={5}>
              <h1>Hello! This is the index page.</h1>
            </CenteredBlock>
          </Row>
          <Row>
            <CenteredBlock colStart={1} colEnd={5} w>
              <h1>Hello! This is the index page.</h1>
            </CenteredBlock>
          </Row>
          <Row>
            <CenteredBlock colStart={1} colEnd={5} w>
              <h1>Hello! This is the index page.</h1>
            </CenteredBlock>
          </Row>
          <Row>
            <CenteredBlock colStart={1} colEnd={5} w>
              <h1>Hello! This is the index page.</h1>
            </CenteredBlock>
          </Row>
        </HomepageContent>
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
