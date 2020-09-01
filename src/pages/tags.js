import React from 'react';
import { graphql } from 'gatsby';

// component
import Tag from './tags';
import Layout from '../components/Layout';

const Tags = ({ data }) => {
  const { allMarkdownRemark } = data;
  // tags
  const mapping = {};
  allMarkdownRemark.edges.forEach(({ node }) => {
    const { tags } = node.frontmatter;
    tags.forEach(tag => {
      if (mapping[tag]) {
        mapping[tag] += 1;
      } else {
        mapping[tag] = 1;
      }
    });
  });
  // const tags = Array.from(Object.keys(mapping)).sort((b, a) =>
  //   mapping[a] - mapping[b]
  // );
  return (
    <Layout>
        <h2>Tag list</h2>
        {/* <ul>
          {tags.map(tag => (
            <Tag key={tag} name={tag} count={mapping[tag]} />
          ))}
        </ul> */}
    </Layout>
  );
};
export default Tags;

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
`;
