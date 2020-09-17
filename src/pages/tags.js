import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// component
import TagLink from '../components/Tag/tagLink';
import Layout from '../components/Layout';

const Tags = ({ data }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <Layout>
      <Styles>
        <h2>All tags</h2>
        <ul className="tagged-list">
          {group.map(tag => {
            const { fieldValue, totalCount } = tag;
            return <TagLink key={fieldValue} name={fieldValue} totalCount={totalCount} />
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const Styles = styled.div``;