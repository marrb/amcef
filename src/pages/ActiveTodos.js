import { useContext, useMemo } from "react";
import { Grid, Container } from "@mui/material";

import TodoList from "../components/Todos/TodoList";
import SearchContext from "../store/searchContext";
import allTodosContext from "../store/allTodos-context";
import NewTodo from "../components/Todos/NewTodo";

function ActiveTodosPage() {
  const searchCtx = useContext(SearchContext);
  const allTodosCtx = useContext(allTodosContext);

  const activeTodos = useMemo(
    () =>
      searchCtx.filterData(
        allTodosCtx.todos.filter((todo) => todo.finished === false)
      ),
    [allTodosCtx.todos, searchCtx]
  );

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <TodoList Todos={activeTodos} />
        <NewTodo />
      </Grid>
    </Container>
  );
}

export default ActiveTodosPage;
