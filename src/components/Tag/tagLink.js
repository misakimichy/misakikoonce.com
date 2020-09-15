import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const TagLink = ({ name }) => (
  <Styles>
    {typeof window !== 'undefined' && <Link to={`/tags/${kebabCase(name)}`}>{name}</Link>}
  </Styles>
);

export default TagLink;

const Styles = styled.li`
  margin-bottom: 8px;
`;