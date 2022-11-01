import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from "components/InterviewerListItem";

export default function DayList(props) {
  const interviewerList = props.interviewers.map((interviewer) => {

    return (
      <InterviewerListItem
      {...interviewer}
      key = {interviewer.id}
      selected={interviewer.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(interviewer.id)}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );
}

