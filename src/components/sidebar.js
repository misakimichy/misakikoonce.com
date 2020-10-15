import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// theme
import { colors } from '../styles/theme';

// asset
import profileImage from '../../static/misaki-real.jpeg';

const Sidebar = () => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteQuery {
  //       site {
  //         siteMetadata {
  //           author
  //           logo
  //           title
  //           resume
  //           description
  //           socialLinks {
  //             twitter
  //             github
  //             linkedin
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => {
  //     const { author, logo, title, resume, description, socialLinks } = data.site.siteMetadata;
  //     const { twitter, github, linkedin } = socialLinks;

  //     return (
  <Styles>
    {typeof window !== 'undefined' &&
      <Link to="/" className="profile-image-link">
        <img className="profile-image" src={profileImage} alt="Misaki Koonce" />
      </Link>
    }
    <div className="name-holder">
      <h1>Misaki Koonce</h1>
      <h5>Software Engineer</h5>
      <p>From Tokyo Now in Seattle.I like hard problems and challenging myself!</p>
    </div>
    {/* <Link to="/about/">About</Link> */}
    <div className="social-links">
      <a href="/ResumeMisakiKoonce.pdf">
        <button tabIndex='1'>
          <FontAwesomeIcon icon={['far', 'file']} className="icon" />
          <span className="icon-span">Resume</span>
        </button>
      </a>
      <a href="https://twitter.com/misakimichy">
        <button tabIndex='1'>
          <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
          <span className="icon-span">Twitter</span>
        </button>
      </a>
      <a href="https://github.com/misakimichy">
        <button tabIndex='1'>
          <FontAwesomeIcon icon={['fab', 'github-alt']} className="icon" />
          <span className="icon-span">Github</span>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/misakikoonce">
        <button tabIndex='1'>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon" />
          <span className="icon-span">LinkedIn</span>
        </button>
      </a>
    </div>
  </Styles>
);

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

    .profile-image-link {
      display: block;
      margin: auto 0; 
    }

    .profile-image {
      width: 140px;
    }

    .name-holder {
      width: 305px;
      margin: 48px 16px;

      h1 {
        font-size: 2.5em;
        margin-top: 0;
      }

      h5 {
        margin-bottom: 0.4rem;
      }
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