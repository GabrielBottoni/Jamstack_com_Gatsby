import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>© {year} Agência Viagens Incríveis — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


