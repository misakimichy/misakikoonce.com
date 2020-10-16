import React from 'react';
import styled from 'styled-components'

// component
import Redirect from './redirect';

// theme
import { colors } from '../styles/theme';

const Navigation = () => (
  <Styles>
    <div className="menu">
      <Redirect redirect='/' text='Home' />
      <Redirect redirect='/writings' text='Writings' />
      <Redirect redirect='/projects' text='Projects' />
      <Redirect redirect='/tags' text='Tags' />
    </div>
  </Styles>
);

export default Navigation;

const Styles = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: white;
  height: 4vh;
  z-index: 1;

  .menu {
    display: flex;
    justify-content: space-around;

    width: 350px;

    * {
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }

      :focus {
        text-decoration: none;
        color: ${colors.neonGreen};
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: flex-end;

    width: unset;
  }
`;