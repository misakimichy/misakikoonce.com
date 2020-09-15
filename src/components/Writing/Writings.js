import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const Writings = ({ name }) => (
  <Styles>
    {typeof window !== 'undefined' && <Link to={`/writings/${kebabCase(name)}`}>{name}</Link>}
  </Styles>
);

export default Writings;

const Styles = styled.li``;