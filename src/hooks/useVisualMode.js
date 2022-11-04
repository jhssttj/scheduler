import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode((prev) => newMode)
      let newHistory = [...history];
      newHistory[newHistory.length - 1] = mode;
      setHistory((prev) => newHistory);
    } else {
      setMode((prev) => newMode);
      let newHistory = [...history];
      newHistory.push(newMode);
      setHistory((prev) => newHistory);
    }
  };
 
  const back = () => {
    let newHistory = [...history];
    if (newHistory.length > 1) {
      setMode((prev) => newHistory[(newHistory.length - 1)]);
    }
   newHistory.pop();
   setHistory((prev) => newHistory);
 };

  return { mode, transition, back };
}
