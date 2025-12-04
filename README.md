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
│   |── TodoList.tsx     # List container for todos
|   |── TodoFilters.tsx  # Filtered todos 
├── hooks/
│   └── useLocalStorage.tsx  # Custom hook for localStorage persistence
|   |── useFilterTodos.tsx  # Apply logic for filtering todos
├── types/
│   └── Todo.ts          # TypeScript interface for Todo items
├── App.tsx              # Main application component
├── App.css              # Application styles
├── main.tsx             # Application entry point
└── index.css            # Global styles


```


<img width="1176" height="835" alt="image" src="https://github.com/user-attachments/assets/51dabd29-2d2e-4a51-8ed7-31acee9f88d2" />

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
