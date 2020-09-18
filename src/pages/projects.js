import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components'

// component
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {
  const { edges } = data.projects;

  return (
    <Layout>
      <Styles>
        <h2>All projects</h2>
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

export default ProjectPage;

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(markdown-projects)/.*\\.md$/"} },
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