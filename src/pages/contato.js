import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { StaticImage } from "gatsby-plugin-image";

const ContatoPage = () => {
  return (
    <Layout>
      <div className="grid cols-2">
        <div>
          <h1>Fale com a nossa equipe</h1>
          <p>Envie sua mensagem e retornamos o mais breve possível.</p>
          <ContactForm />
        </div>
        <div>
          <StaticImage src="../images/icon.jpg" alt="Contato Agência" placeholder="blurred" />
        </div>
      </div>
    </Layout>
  );
};

export default ContatoPage;

export const Head = () => (
  <>
    <title>Contato | Agência Viagens Incríveis</title>
    <meta name="description" content="Formulário de contato para dúvidas, orçamentos e pacotes." />
    <meta property="og:image" content="/images/icon.jpg" />
  </>
);


