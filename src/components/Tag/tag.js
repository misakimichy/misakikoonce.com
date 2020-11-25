import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// theme
import { colors } from '../../styles/theme';

const Tag = ({ name, count, index }) => (
  <Styles>
    <Link to={`/tags/${name.toLowerCase()}`} tabIndex="1">
      <button className="tag-button">{name}</button>
    </Link>
    {count > 1 && index === 0 ? ',' : ''}
  </Styles>
);

export default Tag;

const Styles = styled.div``;
