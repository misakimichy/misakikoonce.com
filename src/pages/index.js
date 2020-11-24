import React from 'react';
import { graphql } from 'gatsby';

// component
import Layout from '../components/Layout';
import ProjectSection from '../components/Project';
import WritingSection from '../components/Writing';

const MainView = ({ data }) => {
  const { projects, writings } = data;

  const projectsData = projects.edges.map(({ node }) => {
    const { title, description, stackTags, path, thumbnail, projectUrl } = node.frontmatter;
    const { src } = thumbnail.childImageSharp.fluid;
    return {
      name: title,
      thumbnail: src,
      stackTags,
      path,
      description,
      projectUrl,
    };
  });

  const writingsData = writings.edges.map(({ node }) => {
    const { title, description, stackTags, path } = node.frontmatter;
    return {
      name: title,
      path,
      description,
      stackTags,
    };
  });

  return (
    <Layout>
      <ProjectSection cards={projectsData} />
      <WritingSection cards={writingsData} />
    </Layout>
  );
};

export default MainView;

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(markdown-projects)/.*\\.md$/"} },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            projectUrl
            stackTags
            projectUrl
            description
            thumbnail {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    writings: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(markdown-writings)/.*\\.md$/"}},
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            description
            stackTags
          }
        }
      }
    }
  }
`;
