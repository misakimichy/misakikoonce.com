import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

// component
import Layout from '../components/Layout';

const Tags = ({ data }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <Layout>
      <Styles>
        <h2>All tags</h2>
        <ul className="tagged-list">
          {group.map((tag) => {
            const { fieldValue, totalCount } = tag;
            return (
              <Link
                to={`/tags/${fieldValue.toLowerCase()}`}
                key={fieldValue}
                className="list-names"
              >
                <li>
                  {fieldValue} ({totalCount})
                </li>
              </Link>
            );
          })}
        </ul>
      </Styles>
    </Layout>
  );
};
export default Tags;

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___stackTags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const Styles = styled.div``;
