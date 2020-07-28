import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import Writings from '../pages/writings';

const WritingsSection = ({ name }) => (
  <li>
    <Link to={`/writings/${kebabCase(name)}`}>{name}</Link>
  </li>
);

export default WritingsSection;