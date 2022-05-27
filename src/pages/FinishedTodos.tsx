import { useContext, useMemo } from "react";
import { Grid, Container } from "@mui/material";

import SearchContext from "../store/searchContext";
import allTodosContext from "../store/allTodos-context";
import TodoList from "../components/Todos/TodoList";

const FinishedTodosPage = () => {
  const searchCtx = useContext(SearchContext);
  const allTodosCtx = useContext(allTodosContext);

  const finishedTodos = useMemo(
    () =>
      searchCtx.filterData(
        allTodosCtx.todos.filter((todo) => todo.finished === true)
      ),
    [allTodosCtx.todos, searchCtx]
  );

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <TodoList Todos={finishedTodos} />
      </Grid>
    </Container>
  );
};

export default FinishedTodosPage;
