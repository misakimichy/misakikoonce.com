import React from 'react';
import { graphql } from 'gatsby';

// component
import Projects from '../components/Project/Projects';
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {
  const { edges } = data.projects;

  return (
    <Layout>
        <h2 className="section-title">All projects</h2>
        <ul className="tagged-list">
          {edges.map(edge => {
            const { title } = edge.node.frontmatter;
            return <Projects key={title} name={title} />
          })}
        </ul>
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
        id
        frontmatter {
          title
        }
      }
    }
  }
}
`;
