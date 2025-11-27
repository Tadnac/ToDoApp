// src/App.tsx
import { useState } from "react";
//types
import type { Todo } from "./types/Todo";
// komponenty
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
//hooky
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useFilterTodos} from "./hoooks/useFilterTodos";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) =>
    setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: string) => setTodos(todos.filter(t => t.id !== id));

  // editace vytvoreny poznamky
  function editTodo(id: string, newText: string) {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
}
  // filtrtovani pomoci hooku, protoze se mi nelibilo mit logiku tady takze jsme si vytvoril hook
  const filteredTodos = useFilterTodos(todos, filter);

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div style={{ maxWidth: 620, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>Todo appka</h1>

      <p>{activeCount} aktivních úkolů</p>

      <TodoInput onAdd={addTodo} />
      
      <TodoFilters active={filter} onChange={setFilter} />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={id => {
          if (confirm("Opravdu chceš smazat tento úkol?")) deleteTodo(id);
        }}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
