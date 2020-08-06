import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';
import Card from '../components/Project';

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
    <Styles>
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
    </Styles>
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

const Styles = styled.div``;