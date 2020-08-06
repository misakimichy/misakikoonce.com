import React from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';
import ProjectSection from '../components/Project';

const MainView = ({ data }) => {
  const { allMarkdownRemark } = data;
  const cards = allMarkdownRemark.edges.map(({ node }) => {
    const { title } = node.frontmatter;
    const { description } = node.frontmatter;
    const { tags } = node.frontmatter;
    const { src } = node.frontmatter.thumbnail.childImageSharp.fluid;
    return {
      name: title,
      path: `/projects/${kebabCase(title)}/`,
      description: description,
      tags: tags,
      thumbnail: src
    };
  });
  return (
    <Layout>
      <ProjectSection cards={cards} />
    </Layout>
  );
};

export default MainView;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            tags
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
  }
`;
