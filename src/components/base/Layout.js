import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import StyledLayout from "./StyledLayout";

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
          <div className="body-section">{children}</div>
        </StyledLayout>
      </div>
    )}
  />
);

export default TemplateWrapper;
