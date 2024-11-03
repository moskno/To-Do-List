import { useState } from "react";
import { useTodos } from "../services/TodosContext";

export const NewTodoForm: React.FC = () => {
  const [newItem, setNewItem] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem) return;
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="New-item-form">
      <label htmlFor="item">New item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button className="btn">Add</button>
    </form>
  );
};
