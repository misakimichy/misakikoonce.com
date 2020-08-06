import React from "react";
import styled from 'styled-components';
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

// component
import Layout from '../components/Layout';


const ProjectTemplate = ({ data }) => {
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
    <Styles>
      <Layout>
        <div className="to-home">
          <Link to='/'>← Go back</Link>
        </div>
        <div >
          <div>
            <p className="title">{frontmatter.title}
              <span className="date">{frontmatter.date}</span>
            </p>
            <div className="stack-tag">
              Stack Tag:
              <ul>
                {tags.map((tag, index) =>
                  <li key={index}>
                    <Link to={tag.path}>{tag.name}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="responsive-container">
            <iframe className="responsive-iframe" title={frontmatter.title} src={frontmatter.projectUrl} allowFullScreen></iframe>
          </div>
          <main dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    </Styles>
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
        tags
      }
    }
  }
`;

const Styles = styled.div`
  display: inline-block;

  :before {
    content: ', ';
  }

  :first-child:before {
    display: none;
  }
`;


