import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const GoHome = () => (
  <Styles>
    <Link to='/'>← Go Home</Link>
  </Styles>
);

export default GoHome;

const Styles = styled.div`
  margin-bottom: 32px;
`;