import React from 'react'
import { graphql } from 'gatsby'
import { kebabCase } from "lodash"
import Layout from '../components/layout'
import Card from '../components/card'

const Main = ({ data }) => {
    const { allMarkdownRemark } = data
    const cards = allMarkdownRemark.edges.map(({ node }) => {
        const { title } = node.frontmatter
        const { date } = node.frontmatter
        const { description } = node.frontmatter
        const { tags } = node.frontmatter
        const { src } = node.frontmatter.thumbnail.childImageSharp.fluid
        console.log(src)
        return {
            name: title,
            path: `/works/${kebabCase(title)}/`,
            date: date,
            description: description,
            tags: tags,
            thumbnail: src
        }
    })

    console.log(cards)
    return (
        <Layout>
            <main>
                <h1>Work</h1>
                <ul>
                    {cards.map((card, index) =>
                        <Card
                            key={index}
                            title={card.name}
                            date={card.date}
                            url={card.path}
                            description={card.description}
                            tags={card.tags}
                            thumbnail={card.thumbnail}
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
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`