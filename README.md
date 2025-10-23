# Vite React JSX Template

A modern React application built with Vite for fast development and optimized builds.

## Features

- ⚡️ **Vite** - Fast build tool with instant HMR (Hot Module Replacement)
- ⚛️ **React 19** - Latest React with JSX support
- 🎨 **CSS** - Pre-configured CSS styling
- 🔧 **ESLint** - Code linting with React-specific rules
- 📦 **npm** - Package management

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+ (recommended)
- npm

### Installation
Dependencies have already been installed during project creation.

```bash
npm install
```
### Development
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`

### Build
Create a production build:
```bash
npm run build
```

### Preview
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure
```
├── public/          # Static assets
├── src/            # Source code
│   ├── assets/     # React assets (images, etc.)
│   ├── App.jsx     # Main App component
│   ├── App.css     # App styles
│   ├── index.css   # Global styles
│   └── main.jsx    # Application entry point
├── .github/        # GitHub specific files
├── index.html      # HTML template
├── package.json    # Dependencies and scripts
└── vite.config.js  # Vite configuration

## Available Plugins

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
check
