import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// component
import WritingSection from '../components/Writing';
import Layout from '../components/Layout';
import GoHome from '../components/GoHome';

const Writings = ({ data }) => {
  const { allMarkdownRemark } = data;
  const titles = [];
  allMarkdownRemark.edges.forEach(({ node }) => {
    const { title } = node.frontmatter;
    titles.push(title);
  });

  return (
    <Layout>
      <GoHome />
      <Styles>
        <h2 className="section-title">All writings</h2>
        {/* <ul className="tagged-list">
          {titles.map(title => (
            <WritingSection key={title} name={title} />
          ))}
        </ul> */}
      <p>Posts coming soon!</p>
      </Styles>
    </Layout>
  );
};

export default Writings;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
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