import "./App.css";
import { Header } from "./Components/Header/Header";
import { TodoForm } from "./Components/TodoForm/TodoForm";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoProvider } from "./Context/TodoContext/TodoContext";

function App() {
  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
