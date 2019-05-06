import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import styled, { css } from 'styled-components';
import Layout from 'components/base/Layout';
import HeroImage from 'img/pexels-photo.jpg';
import { CenteredBlock } from 'components/base/blocks';
import { Hero, HomepageContent } from 'components/homepage';

const FontWrapper = css``;
const TextBlurbs = styled.p`
  font-size: 18px;
  /* font-family: 'OpenSans' !important; */
`;

const HomePage = ({ heroText, subHeroText, homepageBlurb }) => (
  <>
    <Hero imgSrc={HeroImage} heroText={heroText} subHeroText={subHeroText} />
    <HomepageContent>
      {homepageBlurb.map(blurbs => (
        <Row>
          <CenteredBlock colStart={2} colEnd={11}>
            <TextBlurbs>{blurbs.blurbText}</TextBlurbs>
          </CenteredBlock>
        </Row>
      ))}
    </HomepageContent>
  </>
);

export default HomePage;
