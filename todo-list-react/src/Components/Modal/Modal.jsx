import "./Modal.css";

export function Modal({ todo, onClose }) {
  if (!todo) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Tapşırıq Məlumatı</h2>
        <p>{todo.text}</p>
        <button onClick={onClose}>Bağla</button>
      </div>
    </div>
  );
}
