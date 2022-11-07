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

  const updateSpots = (state, appointments) => {
    const days = state.days.map((day) => {
      let spots = 0;
      for (let appointment of day.appointments) {
        if (appointments[appointment].interview === null) {
          spots++;
        }
      }
      day.spots = spots;
      return day;
    })
    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log(state); //State before updating spots check
    return axios.put(`/api/appointments/${id}`, {interview})
    .then (() => {
      const days = updateSpots(state, appointments)
      console.log(state); //State after updating spots check
      setState(prev => ({...prev, appointments: appointments, days: days}))
    })
  }
  
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then (() => {
      const days = updateSpots(state, appointments)
      setState(prev => ({...prev, appointments: appointments, days: days}))
    })
  }


  return { state, setState, setDay, bookInterview, cancelInterview };
}
