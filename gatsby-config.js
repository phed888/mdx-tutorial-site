/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mdx-tutorials",
    description: "How to design for the Conversation Platform",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "templates",
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "components",
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/layouts/defaultLayout.js"),
        },
      },
    },
  ],
}
