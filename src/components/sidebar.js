import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Sidenav, Profile, ProfileImage } from '../styles/styles'
import logo from './../../static/misaki-real.jpg'
import resume from './../../static/ResumeMisakiKoonce.pdf'

const Sidebar = () => (
    <StaticQuery
        query={graphql`
            query SiteQuery {
            site {
                siteMetadata {
                title
                description
                author
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
                            <h1>{data.site.siteMetadata.title}</h1>
                        </Link>
                            <p>{data.site.siteMetadata.description}</p>
                        <p><a href={resume}>Resume</a></p>
                        <Link to="/about/">About</Link>     
                    </Profile>
                </Sidenav>
            </>
        )}
    />
)

export default Sidebar