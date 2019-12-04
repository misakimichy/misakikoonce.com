import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Container, Sidebar, Profile, ProfileImage } from "../styles/styles"
import logo from './../../static/misaki-real.jpg'

const Layout = ({ children }) => (
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
        <Container>
          <Sidebar>
            <Profile>
              <ProfileImage src={logo}></ProfileImage>
              <Link to={`/`}>
              <h1>{data.site.siteMetadata.title}</h1>
              <p>{data.site.siteMetadata.description}</p>
              </Link>
              <p>
                <a href="./ResumeMisakiKoonce.pdf">Resume</a>
              </p>
              <Link to={`/about/`}>About</Link>
      
            </Profile>
          </Sidebar>
          {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout