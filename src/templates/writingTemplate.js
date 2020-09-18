import React from "react";
import styled from 'styled-components';
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';

// theme
import { colors } from '../styles/theme';

const WritingTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout>
      <Styles>
        <h2>{title}</h2>
        <p className="date">{date}</p>
  
        <div className="stack-tag">
          Stack Tag:
            {tags.map(tag =>{
              const link = `/tags/${kebabCase(tag)}/`;
              return (
                <Link to={link} key={tag}>
                  <button type="button" className="tag-button">{tag}</button>
                </Link>
              )
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
