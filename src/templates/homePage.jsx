import React from 'react';
import { graphql } from 'gatsby';
import Row from 'components/base/Row';
import Layout from 'components/base/Layout';
import styled, { css } from 'styled-components';
import { CenteredBlock } from 'components/base/blocks';
import Hero from 'components/hero/Hero';

const TextBlurbs = styled.p`
  font-size: 18px;
  max-width: 50vw;
  padding: 10px;
  background-color: grey;
  opacity: 50%;
  color: ${props => props.theme.colors['white']};
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const HomePage = ({ heroText, subHeroText, homepageBlurb }) => (
  <>
    <Hero
      imgSrc={'img/pexels-photo.jpg'}
      heroText={heroText}
      subHeroText={subHeroText}
    />
    <ContentWrapper>
      {homepageBlurb.map(blurbs => (
        <TextBlurbs>{blurbs.blurbText}</TextBlurbs>
      ))}
    </ContentWrapper>
  </>
);

export default HomePage;
