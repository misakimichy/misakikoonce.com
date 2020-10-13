import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// theme
import { colors } from '../../styles/theme';

const Tag = ({ name, count }) => (
  <Styles>
    {typeof window !== 'undefined' && 
      <Link
        className="tags"
        to={`/tags/${name}`}
      >
        <button className="tag-button">
          {name} {count !== null ? (count) : ''}
        </button>
      </Link>
    }
  </Styles>
);

export default Tag;

const Styles = styled.div``;