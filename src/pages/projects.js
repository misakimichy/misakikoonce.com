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
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <p className="title">All projects</p>
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
