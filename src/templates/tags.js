import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby'
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;

  return (
    <Styles>
      <Layout>
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <p className="title">{tagHeader}</p>
        <ul className="tagged-list">
          {edges.map(({ node }) => {
            const { title } = node.frontmatter;
            const path = `/projects/${kebabCase(title)}`;
            return (
              <li key={title}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`}>All tags</Link>
      </Layout>
    </Styles>
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
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

const Styles = styled.div``;