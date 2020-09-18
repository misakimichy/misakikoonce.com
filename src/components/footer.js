import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Styles>
    <p>Happily <a href="https://github.com/misakimichy/misakikoonce.com.git" target="_blank">handmade</a> in Seattle with love and coffee. ©2020 misakikoonce.com</p>
  </Styles>
)

export default Footer;

const Styles = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px -2px 8px 2px rgba(216,216,216,0.5);
  height: 4vh;
  
  p {
    a {
      text-decoration: none;
    }
  }
`; 