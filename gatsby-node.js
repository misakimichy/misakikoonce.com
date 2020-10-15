const path = require(`path`)

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
        filter: { fileAbsolutePath: {regex: "/(markdown-projects)/.*\.md$/"} },
        sort: { fields: frontmatter___date, order: DESC },
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
              stackTags
              techTags
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
        filter: { fileAbsolutePath: {regex: "/(markdown-writings)/.*\.md$/"} },
        sort: { fields: frontmatter___date, order: DESC },
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date
              description
              stackTags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___stackTags) {
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
    const { path } = node.frontmatter;
    createPage({
      path: path,
      component: projectTemplate,
      context: {
        title: projects
      },
    })
  })

  // Create writings page with template
  result.data.writings.edges.forEach(({ node }) => {
    const { path } = node.frontmatter;
    createPage({
      path: path,
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
      path: `/tags/${tag.fieldValue.toLowerCase()}/`,
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