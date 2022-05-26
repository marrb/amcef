import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useContext, useMemo } from "react";

import NewTodo from "../components/Todos/NewTodo";
import TodoList from "../components/Todos/TodoList";
import SearchContext from "../store/searchContext";
import allTodosContext from "../store/allTodos-context";

function AllTodosPage() {
  const searchCtx = useContext(SearchContext);
  const allTodosCtx = useContext(allTodosContext);

  const allTodos = useMemo(
    () => searchCtx.filterData(allTodosCtx.todos),
    [allTodosCtx.todos, searchCtx]
  );

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <TodoList Todos={allTodos} />
        <NewTodo />
      </Grid>
    </Container>
  );
}

export default AllTodosPage;
