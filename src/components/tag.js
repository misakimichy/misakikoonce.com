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

const Styles = styled.div`
  .tag-button {
    background: transparent;
    color: ${colors.fontGreen};
    border: 1px solid ${colors.lightGrey};
    border-radius: 4px;

    height: 30px;

    margin-right: 10px;

    cursor: pointer;
  
    :hover {
      box-shadow: 3px 4px 4px 0 rgba(216, 216, 216, 0.5);
    }
    :focus {
      outline: 0;
    }
  }
`;