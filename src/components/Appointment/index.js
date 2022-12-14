import React from "react";

import "./styles.scss";

import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Form from "components/Appointment/Form.js";
import Status from "components/Appointment/Status.js";
import Error from "components/Appointment/Error.js";
import Confirm from "components/Appointment/Confirm.js";
import useVisualMode from "../../hooks/useVisualMode";

//Declare state mode
const SHOW = "SHOW";
const EMPTY = "EMPTY";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  //Import function to use state mode to transition or go back
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //Declare function to transition to different state based on current render in form
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE, true);
      });
  }

  function editor() {
    transition(EDIT);
  }
  
  function deleter() {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
      });
  }
  
  function confirm() {
    transition(CONFIRM);
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time = {props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete = {() => confirm()}
          onEdit = {() => editor()}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers = {props.interviewers}
          onCancel={() => back()}
          onSave = {(name, interviewer)=> save(name, interviewer)}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers = {props.interviewers}
          interviewer={props.interview.interviewer.id}
          student={props.interview.student}
          onCancel={() => back()}
          onSave = {(name, interviewer)=> save(name, interviewer)}
        />
      )}
      {mode === SAVING && <Status message = "Saving"/>}
      {mode === DELETING && <Status message = "DELETING"/>}
      {mode === ERROR_SAVE && (
        <Error
          message = "Something went wrong while saving"
          onClose = {() => back()}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message = "Something went wrong while deleting"
          onClose = {() => back()}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message = "Delete interview?"
          onCancel = {()=> back()}
          onConfirm = {() => deleter()}
        />
      )}
    </article>
  );
};
