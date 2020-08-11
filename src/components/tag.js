import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

// theme
import { colors } from '../styles/theme';

const Tag = ({ name, count }) => (
  <Styles>
    <Link
      className="no-underline tags"
      to={`/tags/${kebabCase(name)}`}
    >
      <button className="tag-button">
        {name} {count !== null ? (count) : ''}
      </button>
    </Link>
  </Styles>
);

export default Tag;

const Styles = styled.div``;