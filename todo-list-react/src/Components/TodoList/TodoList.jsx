import "./TodoList.css";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext/TodoContext";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  return (
    <>
      {todos.length > 0 ? (
        <ul id="todo">
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => handleTodoClick(todo)}>
              <span>{todo.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  deleteTodo(todo.id);
                }}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-todos">Heç bir tapşırıq yoxdur.</p>
      )}
      {isModalOpen && (
        <Modal todo={selectedTodo} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}