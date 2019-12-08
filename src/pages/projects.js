import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Layout from '../components/layout'

const ProjectPage = ({ data }) => {
    const { allMarkdownRemark } = data
    const titles = []
    allMarkdownRemark.edges.forEach(({ node }) => {
        const { title } = node.frontmatter;
        titles.push(title)
    })
    
    return (
        <Layout>
            <div>
                <h1>All projects</h1>
                <ul>
                    {titles.map(title => (
                        <Projects key={title} name={title}/>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default ProjectPage

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