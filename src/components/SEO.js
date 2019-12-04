import react from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import {
//     title,
//     logo,
//     author,
//     url,
//     description,
//     socialLinks,
//     contact,
//     logo
// } from 'data'

const SEO = ({ title, description, logo }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    title,
                    defaultDescription,
                    siteUrl,
                    defaultImage
                }
            }
        }) => {
            const seo = {
                title: title || title,
                description: description || defaultDescription,
                logo: `${siteUrl}${logo || defaultImage}`,
                siteUrl: siteUrl,
            }
            return (
                <>
                    <Helmet title={seo.title}>
                        <meta name="description" content={seo.description} />
                        <meta name="logo" content={seo.logo} />
                        {seo.siteUrl && <meta property="og:siteUrl" content={seo.siteUrl} />}
                        {seo.title && <meta property="og:title" content={seo.title} />}
                        {seo.description && <meta property="og:description" content={seo.description} />}
                        {seo.logo && <meta property="og:logo" content={seo.logo} />}
                    </Helmet>
                </>
            )
        }}
    />
)
export default SEO

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
}

SEO.defaultProps = {
    title: null,
    description: null,
    logo: null
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title: title
                defaultDescription: description
                siteUrl: siteUrl
                logo: logo
            }
        }
    }
`
