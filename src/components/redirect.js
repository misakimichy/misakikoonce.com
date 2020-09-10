import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Redirect = ({ redirect, text }) => (
  <Styles style={text === 'See all tags' ? { marginTop: "40px" } : null}>
    <Link to={redirect}>{text}</Link>
  </Styles>
);

export default Redirect;

const Styles = styled.div`
  margin-bottom: 32px;
`;