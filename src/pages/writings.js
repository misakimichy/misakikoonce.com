import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// component
import Writings from '../components/Writing/Writings';
import Layout from '../components/Layout';

const WritingPage = ({ data }) => {
  const { edges } = data.writings;

  return (
    <Layout>
      <Styles>
        <h2>All writings</h2>
        <ul className="tagged-list">
          {edges.map(edge => {
            const { title } = edge.node.frontmatter;
            return <Writings key={title} name={title} />
          })}
        </ul>
      </Styles>
    </Layout>
  );
};

export default WritingPage;

export const pageQuery = graphql`
  {
    writings: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(markdown-writings)/.*\\.md$/"} },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const Styles = styled.div``;