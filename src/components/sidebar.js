import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// theme
import { colors } from '../styles/theme';

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            logo
            title
            resume
            description
            socialLinks {
              twitter
              github
              linkedin
            }
          }
        }
      }
    `}
    render={data => (
      <Styles>
        <Link to="/" className="no-underline profile-image-link">
          <img className="profile-image" src={data.site.siteMetadata.logo} alt={data.site.siteMetadata.title} style={{marginBottom: '0'}} />
        </Link>
        <div className="name-holder">
          <h1 style={{marginBottom: '15px'}}>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        {/* <Link to="/about/">About</Link> */}
        <div className="social-links">
          <div className="social-link-item">
            <a className="no-underline" href={data.site.siteMetadata.resume}>
              <FontAwesomeIcon icon={['far', 'file']} className="icon" />
              <span className="icon-span">Resume</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={data.site.siteMetadata.socialLinks.twitter}>
              <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
              <span className="icon-span">Twitter</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={data.site.siteMetadata.socialLinks.github}>
              <FontAwesomeIcon icon={['fab', 'github-alt']} className="icon" />
              <span className="icon-span">Github</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={data.site.siteMetadata.socialLinks.linkedin}>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon" />
              <span className="icon-span">LinkedIn</span>
            </a>
          </div>
        </div>
      </Styles>
    )}
  />
);

export default Sidebar;

const Styles = styled.div`
/* sidebar styling */
  max-width: 400px;
  width: 30vw;
  padding: 4%;
  border-right: 1px solid ${colors.paleGrey};

  .profile-image {
    border-radius: 50%;
  }

  .name-holder {
    margin-top: 70px;
    margin-bottom: 30px;
  }

  .social-links {
    display: flex;
    flex-direction: column;
  }
  
  .social-link-item {
    padding: 10px;

    .icon {
      font-size: 1.1em;
    }
  }


  @media screen and (max-width: 1024px) {
    .sidebar-container {
      max-width: 267px;
      padding: 2rem;
    }

    .name-holder > h1 {
      font-size: 1.7rem;
      margin-top: 1.5rem;
    }

    .name-holder > p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .social-link-item {
      padding: 6px;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    border-bottom: 1px solid ${colors.paleGrey};
    max-width: 100%;
    width: 100%;
    height: 30%;
    padding: 5%;

    .profile-image-link {
      display: block;
      margin: auto 0;
      min-width: 150px;
    }

    .profile-image {
      max-width: 150px;
    }

    .name-holder {
      padding: 0 5%;
      margin-top: 20px;
    }

    .name-holder > h1 {
      margin-top: 0;
    }

    .social-links {
      margin: auto 0;
      min-width: 115px;
    }
  }

  @media screen and (max-width: 640px) {
    display: block;
    max-width: 100%;
    padding: 2rem;
    height: 100%;

    .profile-image {
      display: block;
      margin: 0 auto;
    }

    .name-holder {
      margin-top: 1.5rem;
      text-align: center;
    }

    .social-links {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }

    .icon-span {
      display: none;
    }

    .social-link-item {
      font-size: 1.2rem;
      width: 50px;
    }
  }
`;