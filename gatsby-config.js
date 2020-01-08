module.exports = {
    siteMetadata: {
        title: "Misaki Koonce",
        logo: '/misaki-real.png',
        author: "Misaki Koonce",
        siteUrl: "https://misakikoonce.com",
        description: "Software Engineer. Originally from Tokyo and now in Seattle. I enjoy frontend software development.",
        socialLinks: {
            twitter: "https://twitter.com/misakimichy",
            github: "https://github.com/misakimichy",
            linkedin: "https://www.linkedin.com/in/misakikoonce",
        },
        contact: {
            email: "email@test.com"
        },
        resume: "/ResumeMisakiKoonce.pdf"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-projects`,
                name: `projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static`,
                name: `profile`,
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
