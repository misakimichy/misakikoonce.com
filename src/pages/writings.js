import React from 'react';
import { graphql, Link } from 'gatsby';

// component
import WritingSection from '../components/Writing';
import Layout from '../components/Layout';

const Writings = ({ data }) => {
  const { allMarkdownRemark } = data;
  const titles = [];
  allMarkdownRemark.edges.forEach(({ node }) => {
    const { title } = node.frontmatter;
    titles.push(title);
  });

  return (
    <Layout>
      <div className="to-home">
        <Link to='/'>← Go back</Link>
      </div>
      <p className="title">All writings</p>
      {/* <ul className="tagged-list">
        {titles.map(title => (
          <WritingSection key={title} name={title} />
        ))}
      </ul> */}
      <p>Add blog posts list here.</p>
    </Layout>
  );
};

export default Writings;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;