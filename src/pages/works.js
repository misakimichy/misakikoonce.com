import React from 'react'
import { graphql } from 'gatsby'
import Works from '../components/works'
import Layout from '../components/layout'

const WorkPage = ({ data }) => {
    const { allMarkdownRemark } = data;
    const titles = []
    allMarkdownRemark.edges.forEach(({ node }) => {
        const { title } = node.frontmatter;
        titles.push(title)
    })
    
    return (
        <Layout>
            <div>
                <h1>All Works</h1>
                <ul>
                    {titles.map(title => (
                        <Works key={title} name={title}/>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default WorkPage

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