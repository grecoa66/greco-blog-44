import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import theme, { GlobalStyle } from 'theme/theme';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Navbar from 'app/Navbar';
import FontPreloader from 'fonts/FontPreloader';

const StyledLayout = styled.div`
  background-color: ${props => props.theme.colors['white']};
  width: 100%;
  height:100%;
  min-height: 100vh;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>
            <GlobalStyle />
            <StyledLayout>
              <Navbar />
              <div className="">{children}</div>
            </StyledLayout>
          </div>
        </ThemeProvider>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
