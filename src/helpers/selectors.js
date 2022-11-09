export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
 
  for (const apptDay of state.days) {
    if (apptDay.name === day) {
      appointmentList = apptDay.appointments;
    }
  }

  let finalAppointmentList = appointmentList.map((id) => {
    for (let appointment in state.appointments) {
      if (Number(appointment) === id) {
        return state.appointments[appointment];
      }
    }
  });
  return finalAppointmentList;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const finalInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return finalInterview;
}

export function getInterviewersForDay(state, day) {
  let interviewerList = [];
 
  for (const interviewerDay of state.days) {
    if (interviewerDay.name === day) {
      interviewerList = interviewerDay.interviewers;
    }
  }

  let finalInterviewerList = interviewerList.map((id) => {
    for (let interviewer in state.interviewers) {
      if (Number(interviewer) === id) {
        return state.interviewers[interviewer];
      }
    }
  });
  return finalInterviewerList;
}
