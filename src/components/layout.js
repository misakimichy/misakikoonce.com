import React from 'react'
import Sidebar from './sidebar'
import { Container, Main } from '../styles/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const Layout = ({ children, location }) => (
  <Container>
    <Sidebar location={location}/>
    <Main>{children}</Main>
  </Container>
)

export default Layout