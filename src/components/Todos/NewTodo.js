import { StyledNewTodo } from "./Todos-styles/NewTodoStyle";
import { Grid } from "@mui/material";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Modal } from "@material-ui/core";
import { useState, useContext } from "react";

import NewTodoForm from "./NewTodoForm";
import ActiveContext from "../../store/active-context";

function NewTodo(){
    const [showModal, setShowModal] = useState(false);
    const OpenFormModal = () => setShowModal(true);
    const CloseFormModal = () => setShowModal(false);

    const activeCtx = useContext(ActiveContext);


    function addTodo(todoData){
        fetch(
            'https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos.json',
            { 
                method: 'POST',
                body: JSON.stringify(todoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res => res.json())
        .then(res => {
            activeCtx.addActive({
                id: res.name,
                title: todoData.title,
                description: todoData.description,
                deadline: todoData.deadline,
                finished: todoData.finished,
            });
        });
    }

    return(
        <>
            <Grid item xs={3}>
                <StyledNewTodo onClick={OpenFormModal}>
                    <AiOutlinePlusCircle className="plusicon"/>
                </StyledNewTodo>
            </Grid>

            <Modal open={showModal} onClose={CloseFormModal}>
                <>
                    <NewTodoForm clickCancel={CloseFormModal} onAddTodo={addTodo}/>
                </>
            </Modal>
        </>
    );
}

export default NewTodo;
