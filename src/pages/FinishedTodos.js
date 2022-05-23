import { useContext } from "react";
import { Grid, Container } from "@mui/material";

import FinishedContext from "../store/finished-context";
import SearchContext from "../store/searchContext";
import TodoList from "../components/Todos/TodoList";

function FinishedTodosPage(){
    const finishedCtx = useContext(FinishedContext);
    const searchCtx = useContext(SearchContext);

    return(
        <Container maxWidth="xl">
            <Grid container spacing={4}>
                <TodoList Todos={searchCtx.filterData(finishedCtx.finished)}/>
            </Grid>
        </Container>
    );
}

export default FinishedTodosPage;