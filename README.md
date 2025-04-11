# IsoMaker Website

This project is the official website for the IsoMaker game engine. It's built with Vue 3 and Vite, using Tailwind CSS for styling.

## Features

- Responsive design for all devices
- Component-based architecture with Vue 3
- TailwindCSS for utility-first styling
- Vue Router for navigation
- Custom design system with consistent theming

## Project Structure

```
src/
├── components/
│   ├── layout/     # Layout components (NavBar, Footer, etc.)
│   ├── pages/      # Page components
│   └── ui/         # Reusable UI components
├── router/         # Vue Router configuration
├── assets/         # Static assets
└── App.vue         # Root component
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Tokens

The website uses a custom color palette and typography scale defined in `tailwind.config.js`. See this file for the available design tokens.