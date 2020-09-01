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
            author
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
    render={data => {
      const { author, logo, title, resume, description, socialLinks } = data.site.siteMetadata;
      const { twitter, github, linkedin } = socialLinks;

      return (
      <Styles>
        {typeof window !== 'undefined' &&
          <Link to="/" className="no-underline profile-image-link">
            <img className="profile-image" src={logo} alt={author} />
          </Link>
        }
        <div className="name-holder">
          <h1 style={{marginBottom: '15px'}}>{author}</h1>
          <p>{description}</p>
        </div>
        {/* <Link to="/about/">About</Link> */}
        <div className="social-links">
          <div className="social-link-item">
            <a className="no-underline" href={resume}>
              <FontAwesomeIcon icon={['far', 'file']} className="icon" />
              <span className="icon-span">Resume</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={twitter}>
              <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
              <span className="icon-span">Twitter</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={github}>
              <FontAwesomeIcon icon={['fab', 'github-alt']} className="icon" />
              <span className="icon-span">Github</span>
            </a>
          </div>
          <div className="social-link-item">
            <a className="no-underline" href={linkedin}>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon" />
              <span className="icon-span">LinkedIn</span>
            </a>
          </div>
        </div>
      </Styles>
      );
    }}
  />
);

export default Sidebar;

const Styles = styled.div`
  width: calc(100vw - 83%);
  padding: 48px;
  border-right: 1px solid ${colors.paleGrey};

  .profile-image {
    border-radius: 50%;
    width: 230px;
  }

  .name-holder {
    margin-top: 48px;
    margin-bottom: 30px;
  }

  .social-links {
    display: flex;
    flex-direction: column;
  }
  
  .social-link-item {
    padding: 8px;

    .icon {
      font-size: 1.1em;
    }
  }

  @media screen and (max-width: 1024px) {
      width: calc(100vw - 72%);
      padding: 40px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.paleGrey};

    width: 100%;
    height: 30%;

    padding: 0;

    .profile-image-link {
      display: block;
      margin: auto 0; 
    }

    .profile-image {
      max-width: 150px;
    }

    .name-holder {
      width: 340px;
      margin: 40px 16px;
    }

    .social-links {
      margin: auto 0;
      min-width: 115px;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 24px 0;

    .profile-image {
      display: block;
      margin: 0 auto;
    }

    .name-holder {
      max-width: 380px;
      margin: 24px 0 0 0;
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
      width: 48px;
    }
  }
`;