import React from 'react'
import Sidebar from './sidebar'
import { Container } from '../styles/styles'

const Layout = ({ children, location }) => (
  <Container>
    <Sidebar location={location}/>
    {children}
  </Container>
)

export default Layout