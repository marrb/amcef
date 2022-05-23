import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useContext } from "react";

import NewTodo from "../components/Todos/NewTodo";
import TodoList from "../components/Todos/TodoList";
import ActiveContext from "../store/active-context";
import FinishedContext from "../store/finished-context";
import SearchContext from "../store/searchContext";

function AllTodosPage(){
    const finishedCtx = useContext(FinishedContext);
    const activeCtx = useContext(ActiveContext);
    const searchCtx = useContext(SearchContext);
  
    const allTodos = activeCtx.active.concat(finishedCtx.finished);

    return(
        <Container maxWidth="xl">
            <Grid container spacing={4}>
                <TodoList Todos={searchCtx.filterData(allTodos)}/>
                <NewTodo/>
            </Grid>
        </Container>
    );
}

export default AllTodosPage;