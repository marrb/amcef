export type Todo = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  finished: boolean;
};

export type GetTodosResponse = Todo[];

export interface AddTodoRequest {
  title: string;
  description: string;
  deadline: string;
  finished: boolean;
}

export type AddTodoResponse = Todo;
