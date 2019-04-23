import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import styled from 'styled-components';
import Layout from 'components/base/Layout';
import HeroImage from 'img/pexels-photo.jpg';
import { CenteredBlock } from 'components/base/blocks';
import { Hero, HomepageContent } from 'components/homepage';

const AboutPageWrapper = styled.div`
  background-color: white;
  height: 100%;
  width: auto;
  border: 1px solid red;
`;

const HomePage = ({ heroText, subHeroText, homepageBlurb }) => {
  console.log(homepageBlurb);
  return (
    <>
      <Hero imgSrc={HeroImage} heroText={heroText} subHeroText={subHeroText} />
      <HomepageContent>
        {homepageBlurb.map(blurbs => (
          <Row>
            <CenteredBlock colStart={2} colEnd={11}>
              <p>{blurbs.blurbText}</p>
            </CenteredBlock>
          </Row>
        ))}
      </HomepageContent>
    </>
  );
};

export default HomePage;
