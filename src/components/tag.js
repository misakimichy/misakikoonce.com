import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const Tag = ({ name, count }) => (
    <Link
      className="no-underline tags"
      to={`/tags/${kebabCase(name)}`}
    >
      <button className="tag-button">
        {name} {count !== null ? (count) : ''}
      </button>
    </Link>
);

export default Tag;