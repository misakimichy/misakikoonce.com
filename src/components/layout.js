import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

// component
import Sidebar from './Sidebar';
import SEO from './SEO';
import Navigation from './navigation';
import Footer from './footer';

// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faFile } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// style
import GlobalStyles from '../styles';
import { colors } from '../styles/theme';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

library.add(fab, faCoffee, faFileRegular, faFile);
config.autoAddCss = false;

deckDeckGoHighlightElement();

const Layout = ({ children }) => (
  <Styles>
    <GlobalStyles />
    <SEO />
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <Navigation />
        {children}
      </div>
      <Footer />
    </div>
  </Styles>
);

export default Layout;

const Styles = styled.div`
  .tag-button {
    background: transparent;
    color: ${colors.fontGreen};
    font-size: 16px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 4px;

    min-height: 30px;

    margin-right: 16px;

    cursor: pointer;
  
    :hover {
      box-shadow: 3px 4px 4px 0 rgba(216, 216, 216, 0.5);
      color: ${colors.neonGreen};
    }
    :focus {
      outline: 0;
      color: ${colors.neonGreen};
    }
  }
`;