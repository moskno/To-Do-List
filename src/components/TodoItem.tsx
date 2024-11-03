interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
