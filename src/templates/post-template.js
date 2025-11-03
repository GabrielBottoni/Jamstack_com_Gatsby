import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const PostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout title={`${frontmatter.title} | Agência Viagens Incríveis`} description={frontmatter.excerpt}>
      <article className="article">
        <h1>{frontmatter.title}</h1>
        <p className="meta">Atualizado em: {frontmatter.updated}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        updated
        excerpt
      }
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} | Agência Viagens Incríveis</title>
    <meta name="description" content={data.markdownRemark.frontmatter.excerpt} />
    <meta property="og:image" content="/images/icon.png" />
  </>
);


