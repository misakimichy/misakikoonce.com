import React from 'react'
import { Link } from 'gatsby'
import works from './works'

export default () => (
    <main>
        <h1> Works</h1>
        <ul>
            <li><Link to="/works/">Work A</Link></li>
            <li><Link to="/works/">Work B</Link></li>
        </ul>
    </main>
)