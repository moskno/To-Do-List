import React, { createContext, useContext, useState, useEffect } from "react";
import { Todo } from "../types/todoType";

interface TodosContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};

export const TodosProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("ITEMS");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
