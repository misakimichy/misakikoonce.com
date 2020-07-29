import React from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import Layout from '../components/layout';
import Card from '../components/card';

// style
import '../styles/styles.css';

const Main = ({ data }) => {
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
      <main>
        <h1 className="project-title">Projects</h1>
        <ul className="project-container">
          {cards.map((card, index) =>
            <Card
              key={index}
              className="project-card"
              title={card.name}
              url={card.path}
              description={card.description}
              tags={card.tags}
              thumbnail={card.thumbnail}
            />
          )}
        </ul>
      </main>
    </Layout>
  );
};

export default Main;

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