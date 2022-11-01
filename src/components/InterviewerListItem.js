import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item--full": props.spots === 0
  });

  const formatNames = () => {
    if (props.selected) {
      return props.name
    }
    return;
  }


  return (<li className= {interviewerClass} onClick = {()=> props.setInterviewer(props.id)}> 
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {formatNames()}
</li>);
}

