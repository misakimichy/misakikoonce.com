import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// component
import Layout from '../components/Layout';
import Tag from '../components/Tag/tag';

// theme
import { colors } from '../styles/theme';

const WritingTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, stackTags } = frontmatter;

  return (
    <Layout>
      <Styles>
        <h2>{title}</h2>
        <p className="date">{date}</p>

        <div className="stack-tag">
          Stack Tag:
          {stackTags.map((tag, index) => {
            return <Tag key={tag} name={tag} count={stackTags.length} index={index} />;
          })}
        </div>

        <main dangerouslySetInnerHTML={{ __html: html }} />
      </Styles>
    </Layout>
  );
};

export default WritingTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        stackTags
      }
    }
  }
`;

const Styles = styled.div`
  .stack-tag {
    div {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    .project-title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 88px;
  }
`;
