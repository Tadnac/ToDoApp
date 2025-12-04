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
    <li className="item">
      <div className="item-div">
        <input className="item-input"
         type="checkbox" 
          checked={todo.completed}
         onChange={() => onToggle(todo.id)} 
         />
        {editing ? (
          <input
          className="input-edit"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={
              e => 
                {
                  if (e.key === "Enter") save();
                  if (e.key === "Escape") 
                      { 
                        setEditing(false); 
                        setText(todo.text); 
                    } 
                }
              }
            onBlur={save}
            autoFocus
          />
        ) : (
          <span
            className={`
              text-lg
              ${todo.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-gray-100"}
            `}
          >
            {todo.text}
          </span>
        )}
      </div>

<<<<<<< HEAD
      <div className="item-div">
        <button className="edit-btn" onClick={() => setEditing(prev => !prev)}>{editing ? "Zrušit" : "Edituj"}</button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>✕</button>
=======
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setEditing(prev => !prev)}>{editing ? "Zrušit" : "Edituj"}</button>
        <button className="todo-btn" onClick={() => onDelete(todo.id)} ✕ </button>

>>>>>>> 63a2a608ebd964cd400c5ef4781556327438a8cb
      </div>
    </li>
  );
}
