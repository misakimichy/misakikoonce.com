import React from 'react';
import { graphql } from 'gatsby';

// component
import Projects from '../components/Project/Projects';
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
        <h1 className="section-title">All projects</h1>
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
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-projects)/.*\\\\.md$/"}}) {
    totalCount
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
