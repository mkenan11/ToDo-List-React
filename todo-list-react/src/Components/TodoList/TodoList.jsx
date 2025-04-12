import "./TodoList.css";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext/TodoContext";

export function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    todos.length > 0 && (
      <ul id="todo">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    )
  );
}