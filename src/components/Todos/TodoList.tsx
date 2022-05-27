import { Todo as TodoType } from "../../contracts/firebase";
import Todo from "./Todo";

interface TodoListProps {
  Todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ Todos }) => {
  return (
    <>
      {Todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          deadline={todo.deadline}
        />
      ))}
    </>
  );
};

export default TodoList;
