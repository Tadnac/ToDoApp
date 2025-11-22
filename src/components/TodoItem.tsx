import type { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
      }}
    >
      <label style={{ display: "flex", gap: 10 }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </label>

      <button onClick={() => onDelete(todo.id)}>✕</button>
    </li>
  );
}
