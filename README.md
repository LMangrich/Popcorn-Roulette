# 🍿 Popcorn Roulette

[English](#english) | [Português](#português)

## Português

### 🎬 Sobre o Projeto

Popcorn Roulette é uma aplicação web que te ajuda a descobrir filmes de forma divertida e interativa! Gire a roleta com filtros personalizados e receba recomendações de filmes sob medida. Não consegue decidir o que assistir? Deixe o Popcorn Roulette escolher por você!

**🌐 Acesse:** [https://lmangrich.github.io/Popcorn-Roulette](https://lmangrich.github.io/Popcorn-Roulette)

### ✨ Funcionalidades

- **Seleção Aleatória de Filmes** com filtros personalizáveis
- **Filtros Avançados**: gêneros, período, duração, plataformas, avaliação, países e classificação etária
- **Recomendações de Filmes Similares** baseadas na sua seleção
- **Tradução Automática de Sinopse** para português
- **Design Totalmente Responsivo**
- **Links Diretos** para (algumas) plataformas de streaming

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **React 19.2.0**
- **TypeScript 5.9.3** 
- **Vite 7.2.4**

#### Estilização
- **Tailwind CSS 3.4.19** 
- **PostCSS**
- **Lucide React** 

#### Componentes UI
- **@radix-ui/react-slider** 
- **clsx & tailwind-merge**

#### Fonte de Dados
- **The Movie Database (TMDB)** - API de dados de filmes ([themoviedb.org](https://www.themoviedb.org/))
- **MyMemory Translation API** - Serviço gratuito de tradução para sinopses

### 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- API backend rodando em `http://localhost:3000` (veja configuração do seu backend)

### 🚀 Executando Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seuusuario/Popcorn-Roulette.git
cd Popcorn-Roulette
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=sua_chave_api_aqui
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Abra seu navegador**
Navegue para `http://localhost:5173/Popcorn-Roulette/`

### 📦 Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

### 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedback são bem-vindos! Sinta-se livre para abrir uma issue ou enviar um pull request.

### 📝 Licença

Este projeto é para fins educacionais. Os dados de filmes são fornecidos por [The Movie Database (TMDB)](https://www.themoviedb.org/).

### 🙏 Agradecimentos

- Dados de filmes do [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Tradução alimentada pela [MyMemory Translation API](https://mymemory.translated.net/)

---

## English

### 🎬 About the Project

Popcorn Roulette is a web application that helps you discover movies in a fun and interactive way! Spin the roulette wheel with custom filters and get personalized movie recommendations. Can't decide what to watch? Let Popcorn Roulette choose for you!

**🌐 Access:** [https://lmangrich.github.io/Popcorn-Roulette](https://lmangrich.github.io/Popcorn-Roulette)

### ✨ Features

- **Random Movie Selection** with customizable filters
- **Advanced Filters**: genres, year range, duration, platforms, rating, countries, and age rating
- **Similar Movie Recommendations** based on your selection
- **Automatic Synopsis Translation** to Portuguese
- **Fully Responsive Design**
- **Direct Links** to (some) streaming platforms

### 🛠️ Technologies Used

#### Frontend
- **React 19.2.0**
- **TypeScript 5.9.3** 
- **Vite 7.2.4** 

#### Styling
- **Tailwind CSS 3.4.19** 
- **PostCSS**
- **Lucide React** 

#### UI Components
- **@radix-ui/react-slider** 
- **clsx & tailwind-merge**

#### Data Source
- **The Movie Database (TMDB)** - Movie data API ([themoviedb.org](https://www.themoviedb.org/))
- **MyMemory Translation API** - Free translation service for movie synopses

### 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running on `http://localhost:3000` (see your backend setup)

### 🚀 Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/popcorn-roulette.git
cd popcorn-roulette
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your_api_key_here
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173/Popcorn-Roulette/`

### 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

### 📝 License

This project is for educational purposes. Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

### 🙏 Acknowledgments

- Movie data from [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Translation powered by [MyMemory Translation API](https://mymemory.translated.net/)

---

