import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// component
import Tag from './tags';
import Layout from '../components/Layout';
import GoHome from '../components/GoHome';

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
      <GoHome />
      <Styles>
        <h2>Tag list</h2>
        <p>Tag list is coming soon!</p>
        {/* <ul>
          {tags.map(tag => (
            <Tag key={tag} name={tag} count={mapping[tag]} />
          ))}
        </ul> */}
      </Styles>
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

const Styles = styled.div``;