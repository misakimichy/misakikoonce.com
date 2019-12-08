import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sidenav, Profile, ProfileImage } from '../styles/styles'

const SocialIcon = ({ href, icon }) => (
    <a
        target="_blank"
        rel="external nofollow noopener noreferrer"
        href={href}
    >
        <span>
            <FontAwesomeIcon icon={icon} />
        </span>
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
                <Sidenav>
                    <Profile>
                        <Link to="/">
                            <ProfileImage src={data.site.siteMetadata.logo}></ProfileImage>
                        </Link>
                        <h1>{data.site.siteMetadata.title}</h1>
                        <p>{data.site.siteMetadata.description}</p>
                        <p><a href={data.site.siteMetadata.resume}>Resume</a></p>
                        <Link to="/about/">About</Link>
                        <div>
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.twitter}
                                icon={['fab', 'twitter']}
                            />
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.github}
                                icon={['fab', 'github-alt']}
                            />
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.linkedin}
                                icon={['fab', 'linkedin-in']}
                            />
                        </div>
                    </Profile>
                </Sidenav>
            </>
        )}
    />
)

export default Sidebar