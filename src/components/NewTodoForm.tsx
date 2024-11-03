import { useState } from "react";

interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

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
