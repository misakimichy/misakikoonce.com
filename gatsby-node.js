const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const projectList = path.resolve(`src/pages/projects.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  const notFound = path.resolve(`src/pages/404.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              tags
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create each project pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  // Create projects list page
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/`,
      component: projectList,
      context: {
        title: projectList
      }
    })
  })

  // Create tags page
  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

// Set the custom 404 Page
exports.onCreatePage = ({ page }) => {
  if(page.path.startsWith('/404')) {
    page.layout = '404.index'
  }
}