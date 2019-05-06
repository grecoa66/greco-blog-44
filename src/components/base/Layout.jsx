import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import StyledLayout from 'components/base/StyledLayout';
import Navbar from 'components/base/Navbar';
import theme, { GlobalStyle } from 'theme/theme';
import FontPreloader from 'fonts/FontPreloader';

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
