import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// theme
import { colors } from '../../styles/theme';

const Tag = ({ name, count }) => (
  <Styles>
    <Link to={`/tags/${name.toLowerCase()}`} tabIndex="1">
      <button className="tag-button">
        {name} {count !== null ? count : ''}
      </button>
    </Link>
  </Styles>
);

export default Tag;

const Styles = styled.div``;
