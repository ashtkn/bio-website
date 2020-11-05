const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteTitle: `Asahi Takenouchi`,
    siteTitleAlt: `Asahi Takenouchi`,
    siteHeadline: `Asahi Takenouchi`,
    siteUrl: `https://www.takenouchi.work`,
    siteDescription: `Asahi Takenouchi's Portfolio Website`,
    siteLanguage: `ja`,
    siteImage: `/banner.jpg`,
    author: `@ashtkn`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asahi Takenouchi`,
        short_name: `Asahi`,
        description: `Asahi Takenouchi's Portfolio Website`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-canonical-urls`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: [`./src/**/*.{ts,tsx}`, `./.cache/fragments/*.js`, `./node_modules/gatsby-*/**/*.js`],
        codegenConfig: { maybeValue: `T | undefined` },
      },
    },
  ],
}
