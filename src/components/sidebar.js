import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const SocialIcon = ({ href, icon, name }) => (
    <a
        className="no-underline social-link-item"
        target="_blank"
        rel="external nofollow noopener noreferrer"
        href={href}
        name={name}
    >
        <div>
            <FontAwesomeIcon icon={icon} className="icon" />
            <span className="icon-span">{name}</span>
        </div>
    </a>
)

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
            <>
                <div class='sidebar-container'>
                    <Link to="/" className="no-underline">
                        <img className="profile-image" src={data.site.siteMetadata.logo} />
                    </Link>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <p>{data.site.siteMetadata.description}</p>
                    {/* <Link to="/about/">About</Link> */}
                    <div className="social-links">
                        <a className="no-underline social-link-item" href={data.site.siteMetadata.resume}>
                            <div>
                                <FontAwesomeIcon icon={['far', 'file']} className="icon"/>
                                <span className="icon-span">Resume</span>
                            </div>
                        </a>
                        <SocialIcon
                            href={data.site.siteMetadata.socialLinks.twitter}
                            icon={['fab', 'twitter']}
                            name={'Twitter'}
                        />
                        <SocialIcon
                            href={data.site.siteMetadata.socialLinks.github}
                            icon={['fab', 'github-alt']}
                            name={'GitHub'}
                        />
                        <SocialIcon
                            href={data.site.siteMetadata.socialLinks.linkedin}
                            icon={['fab', 'linkedin-in']}
                            name={'LinkedIn'}
                        />
                    </div>
                </div>
            </>
        )}
    />
)

export default Sidebar