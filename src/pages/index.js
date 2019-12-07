import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from "lodash"

import Layout from '../components/layout'
import Card from '../components/card'

const Main = ({ data }) => {
    const { allMarkdownRemark } = data
    const titles = allMarkdownRemark.edges.map(({ node }) => {
        const { title } = node.frontmatter
        const { date } = node.frontmatter
        const { description } = node.frontmatter
        const { tags } = node.frontmatter
        return {
            name: title,
            path: `/works/${kebabCase(title)}/`,
            date: date,
            description: description,
            tags: tags
        }
    })
    
    return (
        <Layout>
            <main>
                <h1>Work</h1>
                <ul>
                    {titles.map((title, index) =>
                        <Card
                            key={index}
                            title={title.name}
                            date={title.date}
                            url={title.path}
                            description={title.description}
                            tags={title.tags}
                        />
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
                        date
                        description
                        tags
                    }
                }
            }
        }
    }
`