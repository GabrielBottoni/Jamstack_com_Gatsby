import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const items = data.allMarkdownRemark.nodes;
  const toPath = (type, slug) =>
    type === "post" ? `/posts/${slug}` : type === "noticia" ? `/noticias/${slug}` : `/projetos/${slug}`;

  return (
    <Layout>
      <div className="grid cols-2" style={{ alignItems: "center" }}>
        <div>
          <h1>Explore o mundo com a Agência Viagens Incríveis</h1>
          <p>Pacotes personalizados, notícias e projetos especiais para sua próxima viagem.</p>
        </div>
        <div>
          <StaticImage src="../images/icon.jpg" alt="Agência Viagens Incríveis" placeholder="blurred" />
        </div>
      </div>

      <h2>Últimas atualizações</h2>
      <div className="grid cols-3">
        {items.map((node) => (
          <div className="card" key={`${node.frontmatter.type}-${node.frontmatter.slug}`}>
            <Link to={toPath(node.frontmatter.type, node.frontmatter.slug)}>
              {node.frontmatter.title}
            </Link>
            <p className="meta">Atualizado em: {node.frontmatter.updated}</p>
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { updated: DESC } }
      limit: 20
      filter: { frontmatter: { slug: { ne: null } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          type
          updated
          excerpt
        }
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>Agência Viagens Incríveis — Pacotes, Notícias e Projetos</title>
    <meta name="description" content="Agência de turismo JAMstack com Gatsby. Descubra roteiros, promoções e projetos." />
    <meta property="og:image" content="/images/icon.jpg" />
  </>
);
