# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Google Books API Setup

The Google Books API requires an API key.

### Setup

1. Create a Google Cloud Project.
2. Enable the Google Books API.
3. Generate an API key.
4. Create a `.env` file from `.env.example`.
   Copy `.env.example` to `.env` and replace the placeholder value with your Google Books API key.

```env
VITE_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

5. Install dependencies:

```bash
npm install
```

6. Start the application:

```bash
npm run dev
```

### Environment Variables

See `.env.example` for the required configuration.
