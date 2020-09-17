import React from 'react';
import styled from 'styled-components'

// component
import Redirect from './redirect';

const Navigation = () => (
  <Styles>
    <Redirect redirect='/' text='Home' />
    <Redirect redirect='/writings' text='Writings' />
    <Redirect redirect='/projects' text='Projects' />
    <Redirect redirect='/tags' text='Tags' />
    <Redirect redirect='/about' text='About me' /> 
  </Styles>
);

export default Navigation;

const Styles = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 50%;
  margin-bottom: 40px;
  margin-left: 50%;

  * {
    text-decoration: none;

    :hover, :focus {
      text-decoration: underline;
    }
  }
`;