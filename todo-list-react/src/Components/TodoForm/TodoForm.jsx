import "./TodoForm.css";
import { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext/TodoContext";

export function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Əlavə et</button>
    </form>
  );
}