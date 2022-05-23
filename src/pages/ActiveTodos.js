import { useContext } from "react";
import { Grid, Container } from "@mui/material";

import TodoList from "../components/Todos/TodoList";
import ActiveContext from "../store/active-context";
import SearchContext from "../store/searchContext";
import NewTodo from "../components/Todos/NewTodo";

function ActiveTodosPage(){
    const activeCtx = useContext(ActiveContext);
    const searchCtx = useContext(SearchContext);

    return(
        <Container maxWidth="xl">
            <Grid container spacing={4}>
                <TodoList Todos={searchCtx.filterData(activeCtx.active)}/>
                <NewTodo/>
            </Grid>
        </Container>
    );
}

export default ActiveTodosPage;