import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { Li } from '../styles/styles'

const Tag = ({ name, count }) => (
    <Li>
        <Link to={`/tags/${kebabCase(name)}`}>{name} {count !== null ? (count) : ''}</Link>
    </Li>
);

export default Tag