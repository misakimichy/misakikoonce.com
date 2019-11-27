module.exports = {
    siteMetadata: {
        title: `Misaki Koonce`,
        description: `This is my personal website. I enjoy frontend software development.`,
        author: `Misaki Koonce`,
        siteUrl: `https://misakikoonce.com`,
        social: {
          twitter: 'misakimichy',
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-pages`,
                name: `works`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-slug`,
    ],
}