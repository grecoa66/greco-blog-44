import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import styled from 'styled-components';
import Layout from 'components/base/Layout';
import HeroImage from '../img/pexels-photo.jpg';
import { CenteredBlock } from 'components/base/blocks';
import { Hero, HomepageContent } from 'components/homepage';

const AboutPageWrapper = styled.div`
  background-color: white;
  height: 100%;
  width: auto;
  border: 1px solid red;
`;

const AboutPage = () => {
  return (
    <>
      <Hero imgSrc={HeroImage} />
      <HomepageContent>
        <Row>
          <CenteredBlock colStart={1} colEnd={5}>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5}>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
        <Row>
          <CenteredBlock colStart={1} colEnd={5} w>
            <h2>Hello! This is the index page.</h2>
          </CenteredBlock>
        </Row>
      </HomepageContent>
    </>
  );
};

export default AboutPage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heroText
        subHeroText
      }
    }
  }
`;
