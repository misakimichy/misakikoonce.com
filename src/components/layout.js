import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Container, Sidebar, Profile, ProfileImage } from "../styles/styles"

export default ({ children }) => (
  <Container>
    <Sidebar>
      <Profile>
        <ProfileImage src="./misaki-real.jpg"></ProfileImage>
        <Link to={`/`}>
          <h1 css={css`font-size: 30px;`}>Misaki Koonce</h1>
        </Link>
        <p>
          <a href="./ResumeMisakiKoonce.pdf">Resume</a>
        </p>
        <Link to={`/about/`}>About</Link>

      </Profile>
    </Sidebar>
    {children}
  </Container>
)