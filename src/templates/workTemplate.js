import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  return (
    <div>
      <Link
        to='/'
        >← Go back</Link>
      <div></div>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <ul>
            {frontmatter.tags.map(tag => {
              return <li>{tag}</li>
            })}
          </ul>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <iframe width="90%" height="500" src={frontmatter.workUrl} display="block" margin="0 auto"></iframe>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        workUrl
        tags
      }
    }
  }
`