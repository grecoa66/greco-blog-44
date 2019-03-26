import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import StyledLayout from "./StyledLayout";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

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
        <StyledLayout>
          <Navbar />
          <div className="">{children}</div>
        </StyledLayout>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
