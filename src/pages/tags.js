import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// component
import TagLink from '../components/Tag/tagLink';
import Layout from '../components/Layout';
import Redirect from '../components/redirect';

const Tags = ({ data }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <Layout>
      <Redirect redirect='/' text="← Go Home" />
      <Styles>
        <h2>All tags</h2>
        <ul className="tagged-list">
          {group.map(tag => {
            const { fieldValue } = tag;
            return <TagLink key={fieldValue} name={fieldValue} />
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
      }
    }
  }
`;

const Styles = styled.div``;