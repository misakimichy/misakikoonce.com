import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

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
                <div className='sidebar-container'>
                    <Link to="/" className="no-underline profile-image-link">
                        <img className="profile-image" src={data.site.siteMetadata.logo} alt={data.site.siteMetadata.title} />
                    </Link>
                    <div className="name-holder">
                        <h1>{data.site.siteMetadata.title}</h1>
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
                </div>
            </>
        )}
    />
)

export default Sidebar