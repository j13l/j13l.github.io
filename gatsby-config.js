module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Adam Juras",
        short_name: "Adam Juras",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#ffa1c5",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130253895-1",
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ]
};
