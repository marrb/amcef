import {
  StyledTodo,
  ModalStyle,
  ModalButtonConfirm,
  ModalButtonCancel,
} from "./Todos-styles/TodoStyle";
import allTodosContext from "../../store/allTodos-context";

import { Button, Grid, Stack } from "@mui/material";
import { Modal, Box } from "@material-ui/core";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
}

const Todo: React.FC<TodoProps> = ({ id, title, description, deadline }) => {
  const allTodosCtx = useContext(allTodosContext);
  const itemIsFinished = allTodosCtx.todoIsFinished(id);

  const [showModal, setShowModal] = useState(false);
  const OpenModal = () => setShowModal(true);
  const CloseModal = () => setShowModal(false);

  const confirmHandler = () => {
    allTodosCtx.removeTodo(id);
    CloseModal();
  };

  const toggleFinishedStatusHandler = () => allTodosCtx.switchState(id);
  return (
    <>
      <Grid item xs={3}>
        <StyledTodo>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <h2>{title}</h2>
            <FontAwesomeIcon
              icon={itemIsFinished ? faXmark : faCheck}
              className={itemIsFinished ? "cross" : "tick"}
              onClick={toggleFinishedStatusHandler}
            />
          </Box>
          <p>{description}</p>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="TodoFooter"
          >
            <p>{deadline}</p>
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
            <Button sx={ModalButtonCancel} onClick={CloseModal} classes={{}}>
              Cancel
            </Button>
            <Button sx={ModalButtonConfirm} onClick={confirmHandler}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Todo;
