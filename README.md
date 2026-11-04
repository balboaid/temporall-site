# TEMPORALL

A modern, responsive multi-page web application built with React, featuring animated interfaces, interactive navigation, event showcases, global location visuals, and financial data presentations.

## Features

- Responsive design for desktop and mobile.
- Multi-page navigation using React Router.
- Animated UI components and transitions.
- Scroll-triggered animations.
- Interactive event cards and event listings.
- Global locations section with visual geographic elements.
- Financial dashboard with performance metrics and visual data presentations.
- Dedicated Home, About, Events, Investors, and Contact pages.
- Reusable components and modular architecture.
- Remote image and logo integration.
- Custom backgrounds, overlays, and visual effects.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| JavaScript (ES6+) | Application logic |
| Vite 7 | Development server and build tooling |
| Tailwind CSS 4 | Styling and responsive layouts |
| Framer Motion 12 | Animations and transitions |
| React Router 7 | Client-side routing |
| HTML5 / CSS3 | Web structure and presentation |
| Git / GitHub | Version control |
| Vercel | Deployment |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/balboaid/temporall-web-oficial.git

cd temporall-web-oficial

npm install
```

### Development

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
temporall/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Investors.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Development

The application follows a modular frontend architecture, separating page-level components, reusable UI elements, assets, and routing configuration.

Backend integrations and additional functionality can be implemented independently as the application evolves.

---

**Built with React, Vite, and Tailwind CSS.**





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
