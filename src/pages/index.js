import React from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';
import ProjectSection from '../components/Project';
import WritingSection from '../components/Writing';

const MainView = ({ data }) => {
 const { projects, writings } = data;

  const projectsData = projects.edges.map(({ node }) => {
    const { title, description, tags, path, thumbnail } = node.frontmatter;
    const { src } = thumbnail.childImageSharp.fluid;
    return {
      name: title,
      path: path,
      description: description,
      tags: tags,
      thumbnail: src
    };
  });

  const writingsData = writings.edges.map(({node}) => {
    const { title, description, tags, path } = node.frontmatter;
    return {
      name: title,
      path: path,
      description: description,
      tags: tags,
    }
  })

  // get writing cards data from graphql
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
            tags
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
            tags
          }
        }
      }
    }
  }
`;
