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
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Icons)
- [ESLint](https://eslint.org/)

## Project Structure

```
src/
├── components/
│   ├── TodoInput.tsx    # Form for adding new tasks
│   ├── TodoItem.tsx     # Single task with Drag & Drop logic
│   ├── TodoList.tsx     # List container managing reordering
│   └── TodoFilters.tsx  # Filter buttons (All/Active/Completed)
├── hooks/
│   ├── useLocalStorage.ts # Custom hook for data persistence
│   └── useFilterTodos.tsx # Logic for filtering the list
├── types/
│   └── Todo.ts          # TypeScript interface definition
├── styles/
│   └── components.css   # Custom Tailwind component classes
├── App.tsx              # Main application layout
├── main.tsx             # Entry point
└── index.css            # Global styles and Tailwind imports

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
