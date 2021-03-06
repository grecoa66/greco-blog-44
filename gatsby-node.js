const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.allMarkdownRemark.edges;

    pages.forEach(edge => {
      const { id } = edge.node;
      const { templateKey } = edge.node.frontmatter;
      // The homepage gets created by being a file in the /pages directory
      if (templateKey == 'homePage') {
        return null;
      }
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/${String(templateKey)}.jsx`),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './static'),
        'node_modules',
      ],
      alias: {
        src: path.resolve(__dirname, 'src/'),
        static: path.resolve(__dirname, 'static/'),
        app: path.resolve(__dirname, 'src/app/'),
        templates: path.resolve(__dirname, 'src/templates/'),
      },
      extensions: ['.js', '.jsx', '.json', '.jpg'],
    },
  });
};
