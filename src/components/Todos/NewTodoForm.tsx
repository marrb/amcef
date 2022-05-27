import { Paper, Button } from "@mui/material";
import { Box } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { useContext } from "react";

import {
  FormDiv,
  ActionsDiv,
  FormModalStyle,
  ErrorPopUp,
} from "./Todos-styles/NewTodoFormStyle";
import {
  ModalButtonCancel,
  ModalButtonConfirm,
} from "./Todos-styles/TodoStyle";
import allTodosContext from "../../store/allTodos-context";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please fill out this field."),

  deadline: Yup.date()
    .required("Please fill out this field.")
    .test("date-check", "Invalid date entered!", (value) => {
      const currTime = new Date();
      if (currTime >= value!) {
        return false;
      }
      return true;
    }),
});

interface NewTodoFormProps {
  onCancel: () => void;
}

type Fields = {
  title: string;
  description: string;
  deadline: string;
};

const NewTodoForm: React.FC<NewTodoFormProps> = ({ onCancel }) => {
  const allTodosCtx = useContext(allTodosContext);

  const handleSubmit = (values: Fields) => {
    onCancel();

    allTodosCtx.addTodo({
      title: values.title,
      description: values.description,
      deadline: values.deadline.replace("T", "\xa0\xa0\xa0"),
      finished: false,
    });
  };

  return (
    <Paper>
      <Box sx={FormModalStyle}>
        <Formik
          initialValues={{} as Fields}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange
        >
          {({ errors, touched }) => (
            <Form>
              <FormDiv>
                <label htmlFor="title">Title</label>
                <Field type="text" name="title" />
                {errors.title && touched.title ? (
                  <ErrorPopUp>
                    <RiErrorWarningFill className="warningIcon" />
                    <span> {errors.title}</span>
                  </ErrorPopUp>
                ) : null}
              </FormDiv>
              <FormDiv>
                <label htmlFor="description">Description</label>
                <Field type="text" name="description" as="textarea" />
              </FormDiv>
              <FormDiv>
                <label htmlFor="deadline">Deadline</label>
                <Field type="datetime-local" name="deadline" />
                {errors.deadline && touched.deadline ? (
                  <ErrorPopUp>
                    <RiErrorWarningFill className="warningIcon" />
                    <span> {errors.deadline}</span>
                  </ErrorPopUp>
                ) : null}
              </FormDiv>
              <ActionsDiv>
                <Button sx={ModalButtonCancel} type="button" onClick={onCancel}>
                  Cancel
                </Button>
                <Button sx={ModalButtonConfirm} type="submit">
                  Submit
                </Button>
              </ActionsDiv>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default NewTodoForm;
