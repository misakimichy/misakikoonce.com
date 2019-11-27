import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import styled from 'styled-components'

export default function Template({
  data, // this proStackwill beStackinjected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  // build tags structure for template
  const tags = frontmatter.tags.map(tag => {
    return {
      name: tag,
      path: `/tags/${kebabCase(tag)}/`,
    }
  });
  
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
            <Stack>Stack:</Stack>
            {tags.map(tag =>
              <Li>
                <a to={tag.path}>{tag.name}</a>
              </Li>
            )}
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

const Stack = styled.p`
  margin-bottom: 0
`

const Li = styled.li`
  display: inline-block;
  margin: 0px;


  :before {
    content: ', ';
  }

  :nth-child(2):before {
    display: none;
  }
`