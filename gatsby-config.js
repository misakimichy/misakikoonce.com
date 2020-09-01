module.exports = {
  siteMetadata: {
    title: "Misaki Koonce | Software Engineer",
    logo: '/misaki-real.jpeg',
    author: "Misaki Koonce",
    siteUrl: "https://misakikoonce.com",
    description: "Software Engineer. From Tokyo Now in Seattle. I like developing application with React.",
    socialLinks: {
      twitter: "https://twitter.com/misakimichy",
      github: "https://github.com/misakimichy",
      linkedin: "https://www.linkedin.com/in/misakikoonce",
    },
    contact: {
      email: "misaki.koonce@gmail.com"
    },
    resume: "/ResumeMisakiKoonce.pdf"
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-writings`,
        name: `writings`,
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
        plugins: [{
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-slug`,
    `gatsby-plugin-styled-components`
  ],
}
