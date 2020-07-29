import React from 'react';
import { graphql, Link } from 'gatsby';

// component
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
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <p className="title">Tag list</p>
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