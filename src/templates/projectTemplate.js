import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

// component
import Layout from '../components/Layout';

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
          {stackTags.map((stackTag) => {
            const link = `/tags/${stackTag.toLowerCase()}`;
            return (
              <Link to={link} key={stackTag}>
                <button type="button" className="tag-button">
                  {stackTag}
                </button>
              </Link>
            );
          })}
        </div>

        {projectUrl && (
          <div className="iframe-container">
            <iframe title={title} src={projectUrl} allowFullScreen></iframe>
          </div>
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
  .date {
    font-size: 18px;
    text-align: end;
  }

  .stack-tag {
    margin-bottom: 16px;
    a {
      :first-child {
        margin-left: 8px;
      }
    }
  }

  .iframe-container {
    border: 1px solid ${colors.paleGrey};
    border-radius: 4px;
    box-shadow: 3px 4px 4px 0 rgba(216, 216, 216, 0.5);

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

  @media screen and (max-width: 800px) {
    margin-bottom: 88px;
  }
`;
