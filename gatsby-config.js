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
        icons: [],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
