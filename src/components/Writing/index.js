import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

// pages
import Writings from '../../pages/writings';

const WritingsSection = ({ name }) => (
  <Styles>
    {typeof window !== 'undefined' && <Link to={`/writings/${kebabCase(name)}`}>{name}</Link>}
  </Styles>
);

export default WritingsSection;

const Styles = styled.li``;