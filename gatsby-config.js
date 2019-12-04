module.exports = {
    siteMetadata: {
        defaultTitle: "Misaki Koonce",
        logo: './static/misaki-real.jpg',
        author: "Misaki Koonce",
        url: "https://misakikoonce.com",
        description: "This is my personal website. I enjoy frontend software development.",
        socialLinks: {
            twitter: "https://twitter.com/misakimichy",
            GitHub: "https://github.com/misakimichy",
            LinkedIn: "https://www.linkedin.com/in/misakikoonce",
        },
        contact: {
            email: "email@test.com"
        }
    },
    pathPrefix: "/misakikoonce.com",
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-pages`,
                name: `works`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Misaki Koonce's Portfolio`,
                short_name: `Misaki Koonce`,
                start_url: `/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-slug`,
    ],
}
