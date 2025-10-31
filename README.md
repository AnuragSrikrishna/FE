# Vite React JSX + Tailwind CSS Template

A modern React application built with Vite and styled with Tailwind CSS for fast development and beautiful UI.

## Features

- ⚡️ **Vite** - Fast build tool with instant HMR (Hot Module Replacement)
- ⚛️ **React 19** - Latest React with JSX support
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔧 **ESLint** - Code linting with React-specific rules
- 📦 **npm** - Package management
- 📱 **Responsive Design** - Mobile-first approach with Tailwind's responsive utilities

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

## Tailwind CSS

This project is configured with Tailwind CSS v4. The configuration includes:

- **Base styles**: Reset and normalize CSS
- **Components**: Reusable component classes
- **Utilities**: Low-level utility classes
- **Responsive design**: Mobile-first breakpoints
- **Modern features**: Gradients, shadows, animations

### Tailwind Configuration
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Tailwind directives

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
