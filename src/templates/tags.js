import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby'
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';
import Redirect from '../components/redirect';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;

  return (
    <Layout>
      <Redirect redirect='/' text="← Go Home" />
      <Styles>
        <h2 className="section-title">{tagHeader}</h2>
        <ul className="tagged-list">
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter;
            return (
              <Link key={title} to={path} className="list-names">{title}</Link>
            );
          })}
        </ul>

        <Redirect redirect='/tags' text="See all tags" />
      </Styles>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

const Styles = styled.div`
  .list-names {
    display: block;
    margin-bottom: 8px;
  }
`;