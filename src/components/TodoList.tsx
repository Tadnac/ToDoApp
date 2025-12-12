import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import { useState, type DragEvent } from "react";

interface Props {
  todos: Todo[];
  filtered: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onReorder: (newOrder: Todo[]) => void;
}


export default function TodoList({ todos,
  filtered, 
  onToggle, 
  onDelete, 
  onEdit, 
  onReorder }: Props) {
  
const [draggedId, setDraggedId] = useState<string | null>(null);

const handleDragStart = (e: DragEvent, id: string) => {
  setDraggedId(id);
}

const handleDrop = (e: DragEvent, targetId: string) => {
  if (!draggedId || draggedId === targetId) return;

  const newList = [...todos];

  
  const fromIndex = newList.findIndex((x)=>x.id==draggedId);
  const toIndex = newList.findIndex((x)=>x.id==targetId);
 
 if (fromIndex === -1 || toIndex === -1) return;
  const [moved] = newList.splice(fromIndex, 1);
  newList.splice(toIndex, 0, moved);

  onReorder(newList);
  setDraggedId(null);
};
  return (
    <ul className="list">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      ))}
    </ul>
  );
}
