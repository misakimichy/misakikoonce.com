const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`src/templates/workTemplate.js`)
  const workList = path.resolve(`src/pages/works.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")

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

  // Create each work pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: workTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  // Create works list page
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/works/`,
      component: workList,
      context: {
        title: workList
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