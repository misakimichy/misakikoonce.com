import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const TagLink = ({ name, totalCount }) => (
  <Styles>
    {typeof window !== 'undefined' && <Link to={`/tags/${kebabCase(name)}`}>{name} ({totalCount})</Link>}
  </Styles>
);

export default TagLink;

const Styles = styled.li`
  margin-bottom: 8px;
`;