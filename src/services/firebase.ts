import {
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import {
  AddTodoRequest,
  AddTodoResponse,
  GetTodosResponse,
  Todo,
} from "../contracts/firebase";
import { firestore } from "../lib/firebase";
import { todoColRef } from "../lib/firestore.collection";

export const getTodos = async (): Promise<GetTodosResponse> => {
  const todoSnapshot = await getDocs(todoColRef);

  const todoList = todoSnapshot.docs.map((todo) => ({
    id: todo.id,
    ...todo.data(),
  })) as Todo[];

  return todoList;
};

export const addTodo = async (
  todoData: AddTodoRequest
): Promise<AddTodoResponse> => {
  const todoDoc = await addDoc(todoColRef, todoData);

  return { id: todoDoc.id, ...todoData };
};

export const deleteTodo = async (todoId: string) => {
  const docRef = doc(firestore, "todos", todoId);
  return await deleteDoc(docRef);
};

export const updateTodo = async (todoId: string) => {
  const docRef = doc(firestore, "todos", todoId);
  const docSnapshot = await getDoc(docRef);

  return await updateDoc(docRef, { finished: !docSnapshot.data()?.finished });
};
