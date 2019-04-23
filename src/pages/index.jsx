import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Homepage from 'templates/homePageTemplate';
import Layout from 'components/base/Layout';
import FontPreloader from 'fonts/FontPreloader';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: homepageContent } = data.allMarkdownRemark;
    return (
      <Layout>
        <FontPreloader />
        {homepageContent.map(content => {
          const { heroText, subHeroText } = content.node.frontmatter;
          return (
            <Homepage
              key={heroText}
              heroText={heroText}
              subHeroText={subHeroText}
            />
          );
        })}
        ;
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homePageTemplate" } } }
    ) {
      edges {
        node {
          frontmatter {
            heroText
            subHeroText
          }
        }
      }
    }
  }
`;
