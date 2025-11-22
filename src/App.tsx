import { useState } from 'react'
import type { Todo } from './types/Todo';
import TodoList from './components/TodoList';
import TodoInput from "./components/TodoInput";

import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  
const addTodo =(Text: string) => {
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text: Text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
}
const toggleTodo = (id: string) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
  }
    const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

 return (
  <div style={{ maxWidth: 500, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h1>Smart Todo</h1>

      <TodoInput onAdd={addTodo} />

      <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
  
}
export default App;

