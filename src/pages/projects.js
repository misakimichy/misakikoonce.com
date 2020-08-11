import React from 'react';
import { Link, graphql } from 'gatsby';

// component
import Projects from '../components/Project/Projects';
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const titles = [];
  allMarkdownRemark.edges.forEach(({ node }) => {
    const { title } = node.frontmatter;
    titles.push(title);
  });

  return (
    <Layout>
        <h1 className="section-title">All projects</h1>
        <ul className="tagged-list">
          {titles.map(title => (
            <Projects key={title} name={title} />
          ))}
        </ul>
    </Layout>
  );
};

export default ProjectPage;

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
