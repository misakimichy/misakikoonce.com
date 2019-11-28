import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Container, Sidebar } from "../styles/styles"

export default ({ children }) => (
  <Container>
    <Sidebar>
      <Link to={`/`}>
        <h1
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Misaki Koonce
        </h1>
      </Link>
      <p>
        <a href="resume/ResumeMisakiKoonce.pdf">Resume</a>
      </p>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
    </Sidebar>
    {children}
  </Container>
)