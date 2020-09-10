import React from "react";
import styled from 'styled-components';
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';
import Redirect from '../components/redirect';

// theme
import { colors } from '../styles/theme';

const WritingTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // build tags structure for template
  const tags = frontmatter.tags.map(tag => {
    return {
      name: tag,
      path: `/tags/${kebabCase(tag)}/`,
    };
  });

  return (
    <Layout>
      <Redirect redirect='/' text="← Go Home" />
      <Styles>
        <h2>{frontmatter.title}</h2>
        <p className="date">{frontmatter.date}</p>
  
        <div className="stack-tag">
          Stack Tag:
            {tags.map((tag, index) =>
              <Link to={tag.path} key={index} className="no-underline tags">
                <button type="button" className="tag-button">{tag.name}</button>
              </Link>
            )}
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
        tags,
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
`;
