/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://github.com/delirium-dj/gatsby-tailwind-product-template",
    title: "Gatsby/Tailwind Product Template",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp", // Customizing the default options [ https://www.gatsbyjs.com/plugins/gatsby-plugin-image ]
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: "transparent",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
};
