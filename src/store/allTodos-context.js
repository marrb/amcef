import { createContext } from "react";
import { useState, useEffect, useCallback } from "react";

import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../services/firebase";

const allTodosContext = createContext({
  todos: [],
  addTodo: (newTodo) => {},
  removeTodo: (todoId) => {},
  switchState: (todoId) => {},
  todoIsFinished: (todoId) => {},
});

export function AllTodosContextProvider(props) {
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      setUserTodos(res);
    });
  }, []);

  const todoIsFinishedHandler = useCallback(
    (todoId) =>
      userTodos.some((todo) => todo.id === todoId && todo.finished === true),
    [userTodos]
  );

  const removeTodoHandler = (todoId) =>
    deleteTodo(todoId).then(() => {
      setUserTodos(userTodos.filter((todo) => todo.id !== todoId));
    });

  const addTodoHandler = (newTodo) =>
    addTodo(newTodo).then((res) => {
      setUserTodos((prev) => [...prev, { id: res.id, ...newTodo }]);
    });

  const switchTodoStatus = (todoId) => {
    setUserTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === todoId
          ? { ...todo, finished: !todo.finished }
          : todo;
      });
    });
    updateTodo(todoId);
  };

  const context = {
    todos: userTodos.sort((a, b) => {
      if (a.finished === false && b.finished === false)
        return a.deadline < b.deadline ? -1 : 1;
      else return a.finished === false ? -1 : 1;
    }),
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    switchState: switchTodoStatus,
    todoIsFinished: todoIsFinishedHandler,
  };

  return (
    <allTodosContext.Provider value={context}>
      {props.children}
    </allTodosContext.Provider>
  );
}

export default allTodosContext;
