import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// theme
import { colors } from '../styles/theme';

// asset
import profileImage from '../../static/misaki-real.jpeg';

import gatsbyConfig from '../../gatsby-config';

const Sidebar = ({ data }) => {
  const { logo, role, author, siteUrl, socialLinks, resume, contact } = gatsbyConfig.siteMetadata;
  const { twitter, github, linkedin } = socialLinks;
  const { email } = contact;
  return (
    <Styles>
      {typeof window !== 'undefined' && (
        <Link to={window.location.pathname === '/' ? '/about' : '/'} className="profile-image-link">
          <img className="profile-image" src={logo} alt="Misaki Koonce" />
        </Link>
      )}
      <div className="name-holder">
        <h1>{author}</h1>
        <h5>{role}</h5>
        <p>
          I'm currently taking a sabbatical. But feel free to{' '}
          <a href={`mailto: ${email}`} target="_blank">
            contact me
          </a>
          😃
        </p>
      </div>
      {/* <Link to="/about/">About</Link> */}
      <div className="social-links">
        <a href="/ResumeMisakiKoonce.pdf" target="_blank">
          <button tabIndex="1">
            <FontAwesomeIcon icon={['far', 'file']} className="icon" />
            <span className="icon-span">Resume</span>
          </button>
        </a>
        {/* <a href={twitter} target="_blank">
          <button tabIndex="1">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
            <span className="icon-span">Twitter</span>
          </button>
        </a> */}
        <a href={github} target="_blank">
          <button tabIndex="1">
            <FontAwesomeIcon icon={['fab', 'github-alt']} className="icon" />
            <span className="icon-span">Github</span>
          </button>
        </a>
        <a href={linkedin} target="_blank">
          <button tabIndex="1">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon" />
            <span className="icon-span">LinkedIn</span>
          </button>
        </a>
      </div>
    </Styles>
  );
};

export default Sidebar;

const Styles = styled.aside`
  width: calc(100vw - 83%);
  padding: 48px;
  border-right: 1px solid ${colors.paleGrey};

  .profile-image {
    border-radius: 50%;
    width: 100%;
  }

  .name-holder {
    margin-top: 48px;
    margin-bottom: 30px;

    h1 {
      margin-bottom: 8px;
    }
    h5 {
      margin-top: 0;
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    a {
      button {
        background: ${colors.white};
        border: none;

        font-size: 16px;
        color: ${colors.fontGreen};
        text-align: inherit;
        padding: 8px;

        span {
          margin-left: 8px;
        }
      }
      :focus {
        button {
          color: ${colors.neonGreen};
          span {
            color: ${colors.neonGreen};
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 75%);
    padding: 40px;

    .profile-image {
      width: 100%;
    }

    .name-holder {
      h1 {
        font-size: 3em;
        margin-bottom: 0;
      }

      h5 {
        font-size: 1.15em;
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid ${colors.paleGrey};
    border-right: none;

    width: 100%;

    padding: 0;

    .profile-image {
      width: 140px;
    }

    .name-holder {
      width: 305px;
      margin: 40px 0;

      h1 {
        font-size: 2.5em;
        margin-top: 0;
      }

      h5 {
        margin-bottom: 0.4rem;
      }
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
