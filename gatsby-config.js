/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/hello-gatsby",
  siteMetadata: {
    title: `Agência Viagens Incríveis`,
    description: `Agência de turismo JAMstack com Gatsby. Pacotes, notícias e projetos.`,
    siteUrl: `https://github.com/GabrielBottoni/Jamstack_com_Gatsby`,
    image: `/images/icon.png`,
    author: `Agência Viagens Incríveis`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `noticias`,
        path: `${__dirname}/content/noticias/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projetos`,
        path: `${__dirname}/content/projetos/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/dev-404-page/"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
