const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const templates = {
    post: path.resolve("src/templates/post-template.js"),
    noticia: path.resolve("src/templates/news-template.js"),
    projeto: path.resolve("src/templates/project-template.js"),
  };

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          frontmatter {
            slug
            type
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Erro ao carregar markdown para criar páginas", result.errors);
    return;
  }

  const items = result.data.allMarkdownRemark.nodes;

  items.forEach((node) => {
    const type = node.frontmatter.type;
    const slug = node.frontmatter.slug;
    const template = templates[type];

    if (!template) return;

    const basePath =
      type === "post" ? "/posts/" : type === "noticia" ? "/noticias/" : "/projetos/";

    createPage({
      path: `${basePath}${slug}`,
      component: template,
      context: { slug },
    });
  });
};


