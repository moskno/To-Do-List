import { TodoItem } from "./TodoItem";
import { useTodos } from "../services/TodosContext";

export const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
