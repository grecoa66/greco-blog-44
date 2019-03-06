import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/base/Layout";
import Row from "../components/base/Row";
import CenteredBlock from "../components/base/blocks/CenteredBlock";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    // console.log("Data: ", data);

    return (
      <Layout>
        <h1>Hello! This is the index page.</h1>
        <Row>
          <CenteredBlock colStart="3" colEnd="5">
            Hello
          </CenteredBlock>
        </Row>
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
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "resume-page" } } }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
