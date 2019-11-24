const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({reporter}) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ArtPageTemplate = path.resolve(`src/templates/artpage-template.js`)
  
  const {data} = await graphql(`
    query {
      allContentfulArtPage {
        edges {
          node {
            title
          }
        }
      }
    }             
  `)

  data.allContentfulArtPage.edges.forEach(edge => {
    const slug = edge.node.title
    createPage({
      path: slug,
      component: ArtPageTemplate,
      context: {
        slug: slug
      },
    })
  })
}