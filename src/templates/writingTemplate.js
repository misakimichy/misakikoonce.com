import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

// component
import Layout from '../components/Layout';

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
          {stackTags.map((stackTag) => {
            const link = `/tags/${stackTag.toLowerCase()}/`;
            return (
              <Link to={link} key={stackTag}>
                <button type="button" className="tag-button">
                  {stackTag}
                </button>
              </Link>
            );
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
  .date {
    font-size: 18px;
    text-align: end;
  }

  .stack-tag {
    margin-bottom: 24px;
    a {
      :first-child {
        margin-left: 8px;
      }
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
