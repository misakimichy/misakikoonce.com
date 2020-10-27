import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// theme
import { colors } from '../styles/theme';

const Footer = () => (
  <Styles>
    <p>
      Happily
      <a href="https://github.com/misakimichy/misakikoonce.com.git" target="_blank"> handmade </a>
      with 🧡 and ☕️. ©2020
      <Link to="/about"> Misaki Koonce</Link>
    </p>
  </Styles>
)

export default Footer;

const Styles = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: white;
  box-shadow: 0px -2px 8px 2px rgba(216,216,216,0.5);
  width: 100%;
  height: 3vh;
  
  p {
    font-size: 13px;
    color: ${colors.mediumGrey};
    a {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 480px) {
    height: 7vh;
    p {
      width: 65%;
    }
  }
`;