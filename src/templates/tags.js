import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

// component
import Layout from '../components/Layout';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout>
      <Styles>
        <h2>{tagHeader}</h2>
        <ul className="tagged-list">
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter;
            return (
              <Link key={title} to={path} className="list-names">
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
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
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { stackTags: { in: [$tag] } } }
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

const Styles = styled.div``;
