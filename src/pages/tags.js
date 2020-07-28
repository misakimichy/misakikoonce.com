import React from 'react';
import { graphql } from 'gatsby';

import { Link } from 'gatsby';
import Tag from './tags';
import Layout from '../components/layout';

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
      <div className="detail-container">
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <p className="title">Tag list</p>
        {/* <ul>
          {tags.map(tag => (
            <Tag key={tag} name={tag} count={mapping[tag]} />
          ))}
        </ul> */}
      </div>
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