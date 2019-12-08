import React from 'react'
import Sidebar from './sidebar'
import { Container, Main } from '../styles/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons'
import { faCoffee, faFile } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faFileRegular, faFile)

const Layout = ({ children, location }) => (
  <Container>
    <Sidebar location={location}/>
    <Main>{children}</Main>
  </Container>
)

export default Layout