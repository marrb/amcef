import { createContext, ReactNode } from "react";
import { useState, useEffect, useCallback } from "react";
import { AddTodoRequest, Todo } from "../contracts/firebase";

import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../services/firebase";

interface ContextProps {
  children: ReactNode;
}

interface AllTodosType {
  todos: Array<Todo>;
  addTodo: (newTodo: AddTodoRequest) => Promise<void>;
  removeTodo: (todoId: string) => Promise<void>;
  switchState: (todoId: string) => void;
  todoIsFinished: (todoId: string) => boolean;
}

const allTodosContext = createContext({} as AllTodosType);

export const AllTodosContextProvider = ({ children }: ContextProps) => {
  const [userTodos, setUserTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((res) => {
      setUserTodos(res);
    });
  }, []);

  const todoIsFinishedHandler = useCallback(
    (todoId: string) =>
      userTodos.some((todo) => todo.id === todoId && todo.finished === true),
    [userTodos]
  );

  const removeTodoHandler = (todoId: string) =>
    deleteTodo(todoId).then(() => {
      setUserTodos(userTodos.filter((todo) => todo.id !== todoId));
    });

  const addTodoHandler = async (newTodo: AddTodoRequest) => {
    const todo = await addTodo(newTodo);

    setUserTodos((prev) => [...prev, todo]);
  };

  const switchTodoStatus = (todoId: string) => {
    setUserTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === todoId
          ? { ...todo, finished: !todo.finished }
          : todo;
      });
    });
    updateTodo(todoId);
  };

  const context: AllTodosType = {
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
      {children}
    </allTodosContext.Provider>
  );
};

export default allTodosContext;
