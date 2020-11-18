import React from 'react';
import { graphql } from 'gatsby';

// component
import Layout from '../components/Layout';
import ProjectSection from '../components/Project';
import WritingSection from '../components/Writing';

const MainView = ({ data }) => {
  const { projects, writings } = data;

  const projectsData = projects.edges.map(({ node }) => {
    const { title, description, stackTags, path, thumbnail } = node.frontmatter;
    console.log(node.frontmatter)
    const { src } = thumbnail.childImageSharp.fluid;
    return {
      name: title,
      path: path,
      description: description,
      stackTags: stackTags,
      thumbnail: src
    };
  });

  const writingsData = writings.edges.map(({node}) => {
    const { title, description, stackTags, path } = node.frontmatter;
    return {
      name: title,
      path: path,
      description: description,
      stackTags: stackTags,
    }
  })

  return (
    <Layout>
      <WritingSection cards={writingsData} />
      <ProjectSection cards={projectsData} />
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
