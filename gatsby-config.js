/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {    //这个插件用来持久化组件
    //     component: require.resolve(`./src/Layouts/index.tsx`),
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "yehuozhili",
        short_name: "yehuozhili",
      },
    },
  ],
}
