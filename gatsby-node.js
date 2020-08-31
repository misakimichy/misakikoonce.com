const path = require(`path`)
const _ = require("lodash")
const { kebabCase } = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const projects = path.resolve(`src/pages/projects.js`)
  const writingTemplate = path.resolve(`src/templates/writingTemplate.js`)
  const writings = path.resolve(`src/pages/writings.js`)
  const tags = path.resolve(`src/pages/tags.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  const notFound = path.resolve(`src/pages/404.js`)

  const result = await graphql(`
    {
      projects: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date
              projectUrl
              description
              tags
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
      writings: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(markdown-writings)/.*\.md$/"}},
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date
              description
              tags
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

  // Create projects page with template
  result.data.projects.edges.forEach(({ node }) => {
    const { title } = node.frontmatter;
    createPage({
      path: `/projects/${kebabCase(title)}`,
      component: projectTemplate,
      context: {
        title: projects
      },
    })
  })

  // Create writings page with template
  result.data.writings.edges.forEach(({ node }) => {
    const { title } = node.frontmatter;
    createPage({
      path: `/writings/${kebabCase(title)}`,
      component: writingTemplate,
      context: {
        title: writings
      },
    })
  })

  // Create all tags page
  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/tags/`,
      component: tags,
      context: {
        tag: tag.fieldValue,
      },
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
  if (page.path.startsWith('/404')) {
    page.layout = '404'
  }
}