import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Projects = ({ name }) => (
    <li>
        <Link to={`/projects/${kebabCase(name)}`}>{name}</Link>
    </li>
);

export default Projects