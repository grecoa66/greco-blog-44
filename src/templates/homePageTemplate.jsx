import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import Layout from 'components/base/Layout';
import styled, { css } from 'styled-components';
import { CenteredBlock } from 'components/base/blocks';
import { Hero, HomepageContent } from 'components/homepage';

const FontWrapper = css``;
const TextBlurbs = styled.p`
  font-size: 18px;
  /* font-family: 'OpenSans' !important; */
`;

const HomePage = ({ heroText, subHeroText, homepageBlurb }) => (
  <>
    <Hero imgSrc={'img/pexels-photo.jpg'} heroText={heroText} subHeroText={subHeroText} />
    <HomepageContent>
      {homepageBlurb.map(blurbs => (
        <Row>
          <CenteredBlock colStart={1} colEnd={12}>
            <TextBlurbs>{blurbs.blurbText}</TextBlurbs>
          </CenteredBlock>
        </Row>
      ))}
    </HomepageContent>
  </>
);

export default HomePage;
