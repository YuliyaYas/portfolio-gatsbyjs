const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({reporter}) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ArtPageTemplate = path.resolve(`src/templates/artpage-template.js`)
  const result = await graphql(`
    query {
        allContentfulArtPage(filter: {node_locale: {eq: "en-US"}, title: {}}) {
          edges {
            node {
              columnOne {
                description
                title
              }
              title
            }
          }
        }
      }      
  `)
  result.data.allContentfulArtPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.title}`,
      component: ArtPageTemplate,
      context: {
        title: edge.node.title
      },
    })
  })
}