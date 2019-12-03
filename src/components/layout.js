import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { css } from "@emotion/core"
import { Container, Sidebar, Profile, ProfileImage } from "../styles/styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            defaultTitle
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
              <ProfileImage src="./misaki-real.jpg"></ProfileImage>
              <Link to={`/`}>
              <h1 css={css`font-size: 30px;`}>{data.site.siteMetadata.defaultTitle}</h1>
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