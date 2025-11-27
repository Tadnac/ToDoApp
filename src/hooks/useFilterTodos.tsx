import type {Todo} from "../types/Todo";

export function useFilterTodos(todos: Todo[], filter: string)
{
  return todos.filter ( t => {
    if ( filter==="active" ) return !t.completed;
    if ( filter==="completed" ) return t.completed;
    return true;
  });
}
