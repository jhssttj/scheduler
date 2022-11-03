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
}