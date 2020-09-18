import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

// component
import Layout from '../components/Layout';

const WritingPage = ({ data }) => {
  const { edges } = data.writings;

  return (
    <Layout>
      <Styles>
        <h2 >All writings</h2>
        <ul className="tagged-list">
          {edges.map(edge => {
            const { title, path } = edge.node.frontmatter;
            return <Link key={title} to={path} className="list-names">{title}</Link>
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
            path
          }
        }
      }
    }
  }
`;

const Styles = styled.div``;