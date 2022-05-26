import {
  StyledTodo,
  ModalStyle,
  ModalButtonConfirm,
  ModalButtonCancel,
} from "./Todos-styles/TodoStyle";
import allTodosContext from "../../store/allTodos-context";

import { Grid, Stack } from "@mui/material";
import { Modal, Box } from "@material-ui/core";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  const allTodosCtx = useContext(allTodosContext);
  const itemIsFinished = allTodosCtx.todoIsFinished(props.id);

  const [showModal, setShowModal] = useState(false);
  const OpenModal = () => setShowModal(true);
  const CloseModal = () => setShowModal(false);

  const confirmHandler = () => {
    allTodosCtx.removeTodo(props.id);
    CloseModal();
  };

  const toggleFinishedStatusHandler = () => allTodosCtx.switchState(props.id);
  return (
    <>
      <Grid item xs={3}>
        <StyledTodo>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <h2>{props.title}</h2>
            <FontAwesomeIcon
              icon={itemIsFinished ? faXmark : faCheck}
              className={itemIsFinished ? "cross" : "tick"}
              onClick={toggleFinishedStatusHandler}
            />
          </Box>
          <p>{props.description}</p>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="TodoFooter"
          >
            <p>{props.deadline}</p>
            <button onClick={OpenModal}>Delete</button>
          </Stack>
        </StyledTodo>
      </Grid>

      <Modal open={showModal} onClose={CloseModal}>
        <Box sx={ModalStyle}>
          <h2>Are you sure ?</h2>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              p: 2,
              px: 8,
            }}
          >
            <Box component="button" sx={ModalButtonCancel} onClick={CloseModal}>
              Cancel
            </Box>
            <Box
              component="button"
              type="button"
              sx={ModalButtonConfirm}
              onClick={confirmHandler}
            >
              Confirm
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Todo;
