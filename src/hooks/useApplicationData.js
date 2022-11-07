import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview})
    .then (() => {
      setState(prev => ({...prev, appointments: appointments}))
    })
  }
  
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then (() => {
      setState(prev => ({...prev, appointments: appointments}))
    })
  }


  return { state, setState, setDay, bookInterview, cancelInterview };
}
