import React from 'react'
import { graphql } from 'gatsby'

import Tag from '../components/tag'

const TagPage = ({ data }) => {
    const { allMarkdownRemark } = data;
    // tags
    const mapping = {}
    allMarkdownRemark.edges.forEach(({ node }) => {
        const { tags } = node.frontmatter;
        tags.forEach(tag => {
            if(mapping[tag]) {
                mapping[tag] += 1
            } else {
                mapping[tag] = 1;
            }
        })
    })
    const tags = Array.from(Object.keys(mapping)).sort((b, a) =>
        mapping[a] - mapping[b]
    )

  return (
    <div>
        <h1>Tag list</h1>
        <ul>
            {tags.map(tag => (
                <Tag key={tag} name={tag} count={mapping[tag]} />
            ))}
        </ul>
    </div>
  )
}
export default TagPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`