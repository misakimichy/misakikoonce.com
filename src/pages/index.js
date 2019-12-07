import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from "lodash"

import Layout from "../components/layout"

const Main = ({ data }) => {
    const { allMarkdownRemark } = data
    const titles = allMarkdownRemark.edges.map(({ node }) => {
        const { title } = node.frontmatter
        return {
            name: title,
            path: `/works/${kebabCase(title)}/`,
        }
    })
    
    return (
        <Layout>
            <main>
                <h1>Work</h1>
                <ul>
                    {titles.map((title, index) =>
                        <li key={index}>
                            <Link to={title.path}>{title.name}</Link>
                        </li>
                    )}
                </ul>
            </main>
        </Layout>
    )
}

export default Main

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`