# Todo App

A simple and intuitive Todo application built with React, TypeScript, and Vite.

## Features

- **Add todos** - Create new tasks with a simple input form
- **Edit todos** - Inline editing with Enter to save and Escape to cancel
- **Toggle completion** - Mark tasks as completed with a checkbox
- **Delete todos** - Remove tasks with a confirmation dialog
- **Filter todos** - View all, active, or completed tasks
- **Persistent storage** - Todos are saved to localStorage and persist across browser sessions
- **Active task counter** - Displays the number of remaining active tasks

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## Project Structure

```
src/
├── components/
│   ├── TodoInput.tsx    # Input form for adding new todos
│   ├── TodoItem.tsx     # Individual todo item with edit/toggle/delete
│   └── TodoList.tsx     # List container for todos
├── hooks/
│   └── useLocalStorage.ts  # Custom hook for localStorage persistence
├── types/
│   └── Todo.ts          # TypeScript interface for Todo items
├── App.tsx              # Main application component
├── App.css              # Application styles
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```
