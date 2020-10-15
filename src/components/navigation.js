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
      <Redirect redirect='/about' text='About me' />
    </div>
  </Styles>
);

export default Navigation;

const Styles = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 4vh;

  margin-top: 16px;
  margin-bottom: -24px;

  .menu {
    display: flex;
    justify-content: space-around;

    width: 400px;
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

  @media (max-width: 1024px) {
    width: 70%;

    margin-left: 30%;
  }

  @media (max-width: 800px) {
    margin-top: 0;
  }

  @media (max-width: 640px) {
    justify-content: center;

    width: unset;
    margin-left: unset;
  }
`;