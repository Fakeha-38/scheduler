import { useState } from 'react';

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]); 

  function transition(mode, replace = false){
    // setHistory(prev => [...prev, newMode])
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), mode]);
  } else {
      setHistory(prev => [...prev, mode]);
  }
  // setMode(mode);

  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  }

  return { 
    mode: history[history.length -1],
    transition, back
  };

};

export default useVisualMode;