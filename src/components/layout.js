import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle} from 'styled-components';

// component
import Sidebar from './Sidebar';

// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faFile } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// style
import GlobalStyles from '../styles'


library.add(fab, faCoffee, faFileRegular, faFile);
config.autoAddCss = false;


const Layout = ({ children, location }) => (
  <div className="container">
    <GlobalStyles />
    <Sidebar location={location} />
    <div className="main-container">{children}</div>
  </div>
);

export default Layout;
