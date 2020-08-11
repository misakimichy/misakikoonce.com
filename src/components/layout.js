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
import GlobalStyles from '../styles';
import { colors} from '../styles/theme';


library.add(fab, faCoffee, faFileRegular, faFile);
config.autoAddCss = false;


const Layout = ({ children, location }) => (
  <Styles className="container">
    <GlobalStyles />
    <Sidebar location={location} />
    <div className="main-container">{children}</div>
  </Styles>
);

export default Layout;

const Styles = styled.div`
  .tag-button {
    background: transparent;
    color: ${colors.fontGreen};
    border: 1px solid ${colors.lightGrey};
    border-radius: 4px;

    height: 30px;

    margin-right: 10px;

    cursor: pointer;
  
    :hover {
      box-shadow: 3px 4px 4px 0 rgba(216, 216, 216, 0.5);
    }
    :focus {
      outline: 0;
    }
  }`