import type { Todo } from "../types/Todo";
import { useState } from "react";
import { GripVerticalIcon } from "lucide-react";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e:React.DragEvent, targetId: string) => void;
}

export default function TodoItem({ 
  todo, 
  onToggle, 
  onDelete, 
  onEdit, 
  onDragStart,
  onDrop }: 
  Props) {
  const [editing,setEditing] = useState(false);
  const [text,setText] = useState(todo.text);
  const[isDropTarget,setIsDropTarget]=useState(false);
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
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropTarget(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    // Trik: Kontrolujeme, zda jsme opravdu opustili celý <li> element.
    // Pokud jsme jen přejeli na tlačítko uvnitř (relatedTarget), nic neděláme.
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDropTarget(false);
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropTarget(false); 
    onDrop(e, todo.id);
  };
  
   return (
    <li className={`item ${isDropTarget ? 'drop-target-active' : ''}`} 
     
    onDragOver={(e)=>e.preventDefault()}
     onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDrop(e, todo.id);
      }}>
      <div className="item-div">
        <div className="drag-handle" 
        draggable 
        onDragStart={(e) => onDragStart(e, todo.id)}>
          <GripVerticalIcon size={20} className="gripIcon"/>
        </div>
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


      <div className="item-div">
        <button className="edit-btn" onClick={() => setEditing(prev => !prev)}>{editing ? "Zrušit" : "Edituj"}</button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>✕</button>

      </div>
    </li>
  );
}
