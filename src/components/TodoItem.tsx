import type { Todo } from "../types/Todo";
import { useState } from "react";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing,setEditing] = useState(false);
  const [text,setText] = useState(todo.text);
  const trimmed = text.trim();
  //trimovani pro input at to mam trosku safe protoze user je cune
  const save = () => {
    if (!trimmed)
    {
      return;
    }
    onEdit(todo.id,trimmed);
    setEditing(false);
  };
  
  
   return (
    <li style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        {editing ? (
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") { setEditing(false); setText(todo.text); } }}
            onBlur={save}
            autoFocus
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
        )}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setEditing(prev => !prev)}>{editing ? "Zrušit" : "Edituj"}</button>
        <button onClick={() => onDelete(todo.id)}>✕</button>
      </div>
    </li>
  );
}
