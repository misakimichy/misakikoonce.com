import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Works = ({ name }) => (
    <li>
        <Link to={`/works/${kebabCase(name)}`}>{name}</Link>
    </li>
);

export default Works