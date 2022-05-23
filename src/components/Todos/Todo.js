import { StyledTodo, ModalStyle, ModalButtonConfirm, ModalButtonCancel } from "./Todos-styles/TodoStyle";
import FinishedContext from "../../store/finished-context";
import ActiveContext from "../../store/active-context";

import { Grid, Stack } from "@mui/material";
import { Modal, Box } from "@material-ui/core";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


function Todo(props){
    const finishedCtx = useContext(FinishedContext);
    const activeCtx = useContext(ActiveContext);
    const itemIsFinished = finishedCtx.todoIsFinished(props.id);
    

    const [showModal, setShowModal] = useState(false);
    const OpenModal = () => setShowModal(true);
    const CloseModal = () => setShowModal(false);


    function confirmHandler(){
        if(itemIsFinished){
            finishedCtx.deleteFinished(props.id);
        }
        else{
            activeCtx.removeActive(props.id);
        }

        CloseModal();
        props.onConfirm(props.id);
    }


    function toggleFinishedStatusHandler(){
        if(itemIsFinished){
            finishedCtx.deleteFinished(props.id);
            activeCtx.addActive({
                id: props.id,
                title: props.title,
                description: props.description,
                deadline: props.deadline,
                finished: props.finished,
            });
        }
        else{
            finishedCtx.addFinished({
                id: props.id,
                title: props.title,
                description: props.description,
                deadline: props.deadline,
                finished: props.finished,
            });
            activeCtx.removeActive(props.id);
        }
    }


    return (
        <>
            <Grid item xs={3}>
                <StyledTodo>
                    <Box sx={{justifyContent: 'space-between', display: 'flex',}}>
                        <h2>{props.title}</h2>
                        <FontAwesomeIcon icon={itemIsFinished ? faXmark : faCheck} className={itemIsFinished ? 'cross' : 'tick'} onClick={toggleFinishedStatusHandler}/>
                    </Box>
                    <p>{props.description}</p>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" className="TodoFooter">
                        <p>{props.deadline}</p>
                        <button onClick={OpenModal}>Delete</button>
                    </Stack>
                </StyledTodo>
            </Grid>

            <Modal open={showModal} onClose={CloseModal}>
                <Box sx={ModalStyle}>
                    <h2>Are you sure ?</h2>
                    <Box sx={{justifyContent: 'space-between', display: 'flex', p: 2, px: 8,}}>
                        <Box component='button' sx={ModalButtonCancel} onClick={CloseModal}>Cancel</Box>    
                        <Box component='button' type='button' sx={ModalButtonConfirm} onClick={confirmHandler}>Confirm</Box>  
                    </Box>
                </Box>
            </Modal>
        </>
      );
}

export default Todo;