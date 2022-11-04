export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
 
  for (const apptDay of state.days) {
    if (apptDay.name === day) {
      appointmentList = apptDay.appointments;
    }
  };

  let finalAppointmentList = appointmentList.map((id) => {
    for (let appointment in state.appointments) {
      if (Number(appointment) === id) {
        return state.appointments[appointment];
      }
    }
  })  
  return finalAppointmentList;
};

export function getInterview(state, interview) {
  let finalInterview = interview
  if (finalInterview === null) return null;
  for (let interviewer in state.interviewers) {
    if (Number(interviewer) === finalInterview.interviewer) {
      finalInterview.interviewer = state.interviewers[interviewer];
      return finalInterview;
    }
  }
};
