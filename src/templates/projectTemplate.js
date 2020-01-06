import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { Li } from '../styles/styles'
import Layout from '../components/layout'
import './styles.css'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // build tags structure for template
  const tags = frontmatter.tags.map(tag => {
    return {
      name: tag,
      path: `/tags/${kebabCase(tag)}/`,
    }
  });
  
  return (
    <Layout>
      <div className="detail-container">
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <div >
          <div>
            <p className="title">{frontmatter.title}
              <span className="date">{frontmatter.date}</span>
            </p>
            <div className="stack-tag">
              Stack Tag:
              <ul>
                {tags.map((tag, index) =>
                  <Li key={index}>
                    <Link to={tag.path}>{tag.name}</Link>
                  </Li>
                )}
              </ul>
            </div>
            <main dangerouslySetInnerHTML={{ __html: html }} />
            <iframe title={frontmatter.title} src={frontmatter.projectUrl} display="block" margin="0 auto"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        projectUrl
        tags
      }
    }
  }
`