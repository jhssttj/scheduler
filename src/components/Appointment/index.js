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

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const ERROR = "ERROR";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";



export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

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
        transition(ERROR, true);
      })
  }

  
  function deleter() {
    const interview = null;
    transition(DELETING);
    props.cancelInterview(props.id, interview)
    .then(() => {
      transition(EMPTY);
    })
    .catch(() => {
      transition(ERROR, true);
    })
  }
  
  function confirm() {
    transition(CONFIRM)
  };

  return (
    <article className="appointment">
      <Header time = {props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete = {() => confirm()}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers = {props.interviewers}
        onCancel={() => back()}
        onSave = {(name, interviewer)=> save(name, interviewer)}
       />
      )}
      {mode === SAVING && <Status message = "Saving"/>}
      {mode === DELETING && <Status message = "DELETING"/>}
      {mode === ERROR && <Error message = "Error, something went wrong..."/>}
      {mode === CONFIRM && (
      <Confirm 
      message = "Delete interview?"
      onCancel = {()=> back()}
      onConfirm = {() => deleter()}
      />
      )}
    </article>
  );
}
