import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = "Informe seu nome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (form.mensagem.trim().length < 10) e.mensagem = "Mensagem muito curta";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contato", ...form }),
      });
      setSent(true);
    } catch (err) {
      setSent(true);
    }
  };

  if (sent) {
    return <p>Obrigado! Sua mensagem foi enviada.</p>;
  }

  return (
    <form name="contato" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contato" />
      <label htmlFor="nome">Nome</label>
      <input id="nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" />
      {errors.nome && <div className="error">{errors.nome}</div>}

      <label htmlFor="email">E-mail</label>
      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="voce@exemplo.com" />
      {errors.email && <div className="error">{errors.email}</div>}

      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" rows={5} value={form.mensagem} onChange={handleChange} placeholder="Como podemos ajudar?" />
      {errors.mensagem && <div className="error">{errors.mensagem}</div>}

      <button type="submit" className="primary">Enviar</button>
    </form>
  );
};

export default ContactForm;


