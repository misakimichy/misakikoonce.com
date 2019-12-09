import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Tag = ({ name, count }) => (
    <li className="tag-item">
        <Link
            className="no-underline"
            to={`/tags/${kebabCase(name)}`}
        >
            {name} {count !== null ? (count) : ''}
        </Link>
    </li>
);

export default Tag