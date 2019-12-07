import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sidenav, Profile, ProfileImage } from '../styles/styles'
import logo from './../../static/misaki-real.jpg'
import resume from './../../static/ResumeMisakiKoonce.pdf'

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
                        title
                        description
                        author
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
                            <ProfileImage src={logo}></ProfileImage>
                        </Link>
                        <h1>{data.site.siteMetadata.title}</h1>
                        <p>{data.site.siteMetadata.description}</p>
                        <p><a href={resume}>Resume</a></p>
                        <Link to="/about/">About</Link>
                        <div>
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.twitter}
                                icon={['fab', 'twitter']}
                            />
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.github}
                                icon={['fab', 'github']}
                            />
                            <SocialIcon
                                href={data.site.siteMetadata.socialLinks.linkedin}
                                icon={['fab', 'linkedin']}
                            />
                        </div>
                    </Profile>
                </Sidenav>
            </>
        )}
    />
)

export default Sidebar