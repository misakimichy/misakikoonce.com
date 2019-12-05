import React from 'react'
import Sidebar from './sidebar'
import { Container, Main } from '../styles/styles'

const Layout = ({ children, location }) => (
  <Container>
    <Sidebar location={location}/>
    <Main>{children}</Main>
  </Container>
)

export default Layout