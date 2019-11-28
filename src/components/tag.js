import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

const Tag = ({ name, count }) => (
    <Li>
        <Link to={`/tags/${kebabCase(name)}`}>{name} ({count})</Link>
    </Li>
);

export default Tag

// Style Componentss
const Li = styled.li`
    display: inline-block;


    :before {
    content: ', ';
    }

    :first-child:before {
    display: none;
    }
`