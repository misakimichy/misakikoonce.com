import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default () => (
    <Layout>
        <main>
            <h1>Work</h1>
            <ul>
                <li><Link to="/works/brown-and-cony">Brown and Cony</Link></li>
                <li><Link to="/works/project-miguel">Project Miguel</Link></li>
            </ul>
        </main>
    </Layout>
)