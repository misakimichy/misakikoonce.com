import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = () => (
  <StaticQuery
    query={graphql`
      query seo {
        site {
          siteMetadata {
            title,
            description,
            siteUrl,
            logo,
            author
          }
        }
      }
    `}
    render={data => {
      const { title, description, logo, siteUrl, author } = data.site.siteMetadata;
      
      return (
        <Helmet title={title}>
          <meta name="description" content={description} />
          <meta name="logo" content={logo} />
          {siteUrl && <meta property="og:siteUrl" content={siteUrl} />}
          {title && <meta property="og:title" content={title} />}
          {description && <meta property="og:description" content={description} />}
          {logo && <meta property="og:logo" content={logo} />}
          {author && <meta property="og:author" content={author} />}
        </Helmet>
      );
    }}
  />
);

export default SEO;
