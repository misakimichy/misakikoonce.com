import react from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import {
//     defaultTitle,
//     logo,
//     author,
//     url,
//     description,
//     socialLinks,
//     contact,
//     logo
// } from 'data'

const SEO = ({ defaultTitle, description, logo }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    url,
                    defaultImage
                }
            }
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                logo: `${url}${logo || defaultImage}`,
                url: url,
            }
            return (
                <>
                    <Helmet title={seo.title}>
                        <meta name="description" content={seo.description} />
                        <meta name="logo" content={seo.logo} />
                        {seo.url && <meta property="og:url" content={seo.url} />}
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
                defaultTitle: defaultTitle
                defaultDescription: description
                url: url
                logo: logo
            }
        }
    }
`
