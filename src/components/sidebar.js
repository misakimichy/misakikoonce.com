import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Sidenav, Profile, ProfileImage } from '../styles/styles'
import logo from './../../static/misaki-real.jpg'

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
                        <ProfileImage src={logo}></ProfileImage>
                        <Link to="/">
                            <h1>{data.site.siteMetadata.title}</h1>
                            <p>{data.site.siteMetadata.description}</p>
                        </Link>
                        <p><a href="./ResumeMisakiKoonce.pdf">Resume</a></p>
                        <Link to="/about/">About</Link>     
                    </Profile>
                </Sidenav>
            </>
        )}
    />
)

export default Sidebar