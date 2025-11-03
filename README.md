# Agência Viagens Incríveis

Uma aplicação web moderna desenvolvida com **Gatsby** seguindo a arquitetura **JAMstack**, que oferece uma plataforma completa para uma agência de turismo com conteúdo dinâmico, formulários estáticos e design responsivo.

## 📋 Sobre o Projeto

A **Agência Viagens Incríveis** é um site estático gerado estaticamente que apresenta pacotes de viagem, notícias e projetos turísticos. O projeto utiliza arquivos Markdown para gerenciar conteúdo, permitindo atualizações simples sem necessidade de banco de dados.

### Características Principais

- ✅ Arquitetura JAMstack com deploy em CDN (Netlify)
- ✅ Build estático com Gatsby
- ✅ Conteúdo gerenciado via arquivos Markdown
- ✅ Formulário de contato integrado com Netlify Forms
- ✅ Design totalmente responsivo
- ✅ SEO otimizado com metadados e sitemap
- ✅ Imagens otimizadas automaticamente
- ✅ CI/CD configurado

## 🛠️ Tecnologias Utilizadas

- **Gatsby 5.14.6** - Framework React para sites estáticos
- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **Styled Components** - CSS-in-JS para estilização
- **gatsby-plugin-image** - Otimização automática de imagens
- **gatsby-transformer-remark** - Processamento de arquivos Markdown
- **gatsby-plugin-sitemap** - Geração automática de sitemap
- **gatsby-plugin-robots-txt** - Controle de indexação por buscadores
- **Netlify** - Hospedagem e CI/CD

## 📁 Estrutura do Projeto

```
hello-gatsby/
├── content/              # Conteúdo em Markdown
│   ├── posts/           # Posts de blog
│   ├── noticias/        # Notícias
│   └── projetos/        # Projetos turísticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── ContactForm.js
│   ├── pages/          # Páginas estáticas
│   │   ├── index.js
│   │   ├── contato.js
│   │   └── 404.js
│   ├── templates/      # Templates para páginas dinâmicas
│   │   ├── post-template.js
│   │   ├── news-template.js
│   │   └── project-template.js
│   ├── styles/         # Estilos globais
│   │   └── global.css
│   └── images/         # Imagens estáticas
├── gatsby-config.js    # Configuração do Gatsby
├── gatsby-node.js      # Criação de páginas dinâmicas
├── netlify.toml        # Configuração de deploy
└── package.json        # Dependências do projeto
```

## 🚀 Como Instalar e Executar

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GabrielBottoni/Jamstack_com_Gatsby.git
cd hello-gatsby
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run develop
```

4. Acesse o site em `http://localhost:8000`

### Comandos Disponíveis

- `npm run develop` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run serve` - Serve a build localmente
- `npm run clean` - Limpa o cache do Gatsby

## 📝 Adicionando Conteúdo

### Criando um Novo Post

Crie um arquivo Markdown na pasta `content/posts/` com o seguinte formato:

```markdown
---
title: "Título do Post"
date: "2025-01-15"
updated: "2025-01-15"
slug: "titulo-do-post"
type: "post"
excerpt: "Descrição breve do post"
cover: "../images/icon.png"
---

Conteúdo do post em Markdown...
```

### Criando uma Notícia

Crie um arquivo na pasta `content/noticias/` com o mesmo formato, mas com `type: "noticia"`.

### Criando um Projeto

Crie um arquivo na pasta `content/projetos/` com `type: "projeto"`.

## 🌐 Deploy no Netlify

O projeto está configurado para deploy automático no Netlify através do arquivo `netlify.toml`.

### Opção 1: Deploy via Git (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Acesse [Netlify](https://app.netlify.com)
3. Clique em "Add new site" → "Import from Git"
4. Selecione seu repositório
5. O Netlify detectará automaticamente as configurações do `netlify.toml`
6. Clique em "Deploy site"

### Opção 2: Deploy via CLI

1. Instale o Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Execute o build:
```bash
npm run build
```

4. Faça o deploy:
```bash
netlify deploy --prod --dir=public
```

### Configurações de Build

As seguintes configurações estão definidas no `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `public`
- **Node version**: 18

## ✨ Funcionalidades

### 1. Página Inicial
- Lista as últimas atualizações (posts, notícias e projetos)
- Layout responsivo com grid de 3 colunas em desktop
- Imagem otimizada com `StaticImage`

### 2. Páginas Dinâmicas
- Rotas geradas automaticamente a partir de arquivos Markdown
- Templates específicos para cada tipo de conteúdo
- URLs amigáveis: `/posts/slug`, `/noticias/slug`, `/projetos/slug`

### 3. Formulário de Contato
- Validação de campos (nome, email, mensagem)
- Integração com Netlify Forms
- Design responsivo
- Feedback visual de erros

### 4. SEO e Performance
- Metadados configurados por página
- Sitemap automático
- Robots.txt configurado
- Imagens otimizadas e lazy loading
- Open Graph tags para redes sociais

### 5. Design Responsivo
- Layout adaptativo para mobile, tablet e desktop
- Grid system responsivo
- Formulários otimizados para dispositivos móveis
- Navegação intuitiva

## 🎨 Componentes

### Header
Componente de navegação com links para Home e Contato, estilizado com Styled Components.

### Footer
Rodapé simples com informações de copyright.

### Layout
Componente wrapper que envolve todas as páginas, incluindo Header e Footer.

### ContactForm
Formulário de contato com:
- Validação de campos em tempo real
- Integração com Netlify Forms
- Estados de loading e sucesso
- Mensagens de erro personalizadas

## 📊 Estrutura de Dados

### Frontmatter dos Arquivos Markdown

Todos os arquivos Markdown devem conter:

- `title`: Título do conteúdo
- `date`: Data de criação (formato YYYY-MM-DD)
- `updated`: Data de atualização
- `slug`: URL amigável (sem espaços ou caracteres especiais)
- `type`: Tipo de conteúdo (`post`, `noticia` ou `projeto`)
- `excerpt`: Descrição breve
- `cover`: Caminho para imagem de capa (opcional)

## 🔧 Configurações

### Gatsby Config

O arquivo `gatsby-config.js` contém:
- Metadados do site
- Plugins do Gatsby
- Configuração de fontes e otimizações
- Configuração de source filesystem para Markdown

### Gatsby Node

O arquivo `gatsby-node.js` cria páginas dinamicamente a partir dos arquivos Markdown, gerando rotas como:
- `/posts/[slug]`
- `/noticias/[slug]`
- `/projetos/[slug]`

## 📱 Responsividade

O site utiliza media queries para adaptar o layout:

- **Mobile**: Layout em coluna única
- **Tablet (≥720px)**: Grid de 2 colunas
- **Desktop**: Grid de 3 colunas para cards

## 🐛 Troubleshooting

### Erro ao fazer build

Se encontrar erros durante o build:

1. Limpe o cache:
```bash
npm run clean
```

2. Reinstale as dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. Execute o build novamente:
```bash
npm run build
```

### Formulário não envia

Certifique-se de que:
- O formulário está configurado com `data-netlify="true"`
- O campo hidden `form-name` está presente
- O site está deployado no Netlify

## 📄 Licença

Este projeto é privado e de uso pessoal.

## 👨‍💻 Autor

Desenvolvido como parte de um projeto acadêmico sobre JAMstack com Gatsby.

---

**Desenvolvido com ❤️ usando Gatsby e JAMstack**
