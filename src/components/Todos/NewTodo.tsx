import { StyledNewTodo } from "./Todos-styles/NewTodoStyle";
import { Grid } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from "@material-ui/core";
import { useState } from "react";

import NewTodoForm from "./NewTodoForm";

const NewTodo = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const OpenFormModal = () => setShowModal(true);
  const CloseFormModal = () => setShowModal(false);

  return (
    <>
      <Grid item xs={3}>
        <StyledNewTodo onClick={OpenFormModal}>
          <AiOutlinePlusCircle className="plusicon" />
        </StyledNewTodo>
      </Grid>

      <Modal open={showModal} onClose={CloseFormModal}>
        <>
          <NewTodoForm onCancel={CloseFormModal} />
        </>
      </Modal>
    </>
  );
};

export default NewTodo;
