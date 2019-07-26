import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import Layout from 'components/base/Layout';
import styled, { css } from 'styled-components';
import { CenteredBlock } from 'components/base/blocks';
import { Hero, HomepageContent } from 'components/homepage';

const TextBlurbs = styled.p`
  font-size: 18px;
`;

const HomePage = ({ heroText, subHeroText, homepageBlurb }) => (
  <>
    <Hero
      imgSrc={'img/pexels-photo.jpg'}
      heroText={heroText}
      subHeroText={subHeroText}
    />
    <HomepageContent>
      {homepageBlurb.map(blurbs => (
        <Row key={blurbs.blurbText}>
          <CenteredBlock colStart={2} colEnd={11}>
            <TextBlurbs>{blurbs.blurbText}</TextBlurbs>
          </CenteredBlock>
        </Row>
      ))}
    </HomepageContent>
  </>
);

export default HomePage;
