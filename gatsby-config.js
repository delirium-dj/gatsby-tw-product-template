/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://github.com/delirium-dj/gatsby-tailwind-product-template",
    title: "Gatsby/Tailwind Product Template",
    description:
      "Attempt to generate easy to use template for Product Websites",
    author: "DJ Djordjevic",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/djodjo123/",
      },
      {
        name: "github",
        url: "https://github.com/delirium-dj",
      },
    ],
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
          breakpoints: [480, 750, 1080, 1366, 1637, 1920],
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
