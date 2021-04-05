import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// component
import Layout from '../components/Layout';
import Tag from '../components/Tag/tag';

// theme
import { colors } from '../styles/theme';

const ProjectTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, stackTags, techTags, projectUrl } = frontmatter;

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

        {projectUrl && (
          <>
            <div className="iframe-container">
              <iframe title={title} src={projectUrl} allowFullScreen></iframe>
            </div>

            <a
              href={projectUrl}
              target="_blank"
              style={{ marginBottom: '24px', marginRight: '16px' }}
            >
              <span className="link" tabIndex="0">
                Visit this project 👉
              </span>
            </a>
          </>
        )}
        <main dangerouslySetInnerHTML={{ __html: html }} />

        <div className="tech-stack">
          <h4>Technology Used</h4>
          <ul>
            {techTags.map((techTag) => {
              return <li key={techTag}>{techTag}</li>;
            })}
          </ul>
        </div>
      </Styles>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        projectUrl
        stackTags
        techTags
      }
    }
  }
`;

const Styles = styled.div`
  .iframe-container {
    border: 1px solid ${colors.paleGrey};
    border-radius: 4px;

    height: 500px;

    margin: 40px auto 40px auto;
    overflow: hidden;

    iframe {
      width: 100%;
      height: 100%;

      html {
        width: 100%;
        height: 100%;
      }
    }
  }

  main {
    margin-top: 24px;
  }

  @media screen and (max-width: 1024px) {
    .project-title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
