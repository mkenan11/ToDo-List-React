import "./Header.css";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext/TodoContext";


export function Header() {
  const { todos } = useContext(TodoContext);
  return (
    <h1 className="header">
        TODO List : <span>{todos.length}</span>
    </h1>
  );
}