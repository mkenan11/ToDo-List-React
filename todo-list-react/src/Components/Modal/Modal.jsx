import "./Modal.css";

import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext/TodoContext";

export function Modal({ todo, onClose }) {
  if (!todo) return null;

  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(todo.id);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Tapşırıq Məlumatı</h2>
        <p>{todo.text}</p>

        <div className="modal-buttons">
          <button onClick={handleDelete}>Sil</button>
          <button onClick={onClose}>Bağla</button>
        </div>
      </div>
    </div>
  );
}