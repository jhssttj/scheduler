import React, {useState} from "react";

import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {

  //Declare state and intital state for render
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //Declare function to reset,cancel or save information updated on form
  const reset = function() {
    setStudent('');
    setInterviewer(null);
    setError(null);
  };

  const cancel = function() {
    reset();
    props.onCancel();
  };

  const validate = function() {
    if (!student) {
      setError("Student name cannot be blank");
    } else if (!interviewer) {
      setError("Please select an interviewer");
    } else {
      setError(null);
      props.onSave(student, interviewer);
    }
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name= "name"
            type="text"
            placeholder="Enter Student Name"
            data-testid = "student-name-input"
            value = {student}
            onChange = { event => setStudent(event.target.value)}
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          interviewers = {props.interviewers}
          value = {interviewer}
          onChange = {setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {cancel}>Cancel</Button>
          <Button confirm onClick = {validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};
