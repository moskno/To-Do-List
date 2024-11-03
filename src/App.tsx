import React from "react";
import "./App.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import { TodosProvider } from "./services/TodosContext";

const App: React.FC = () => {
  return (
    <div className="container">
    <TodosProvider>
      <NewTodoForm/>
      <h1>Todo List</h1>
      <TodoList />
    </TodosProvider>
    </div>
  );
};

export default App;
