import React from "react";
import { useTimerContext } from "../contexts/timer.context";

/**
 * hook for showing timer and storing the data in the localStorage
 */
export default function useTimer() {
  const [stop, setStop] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  // timer context
  const { setHours, setMinutes, setSeconds } = useTimerContext();

  /**
   * function to start counting
   * this will set the pause and stop to false
   */
  function startTimer() {
    setStop(false);
    setPaused(false);
  }

  /**
   * function to pause the time
   * this will set the pause to true and stop to false
   */
  function pauseTimer() {
    setStop(false);
    setPaused(true);
  }

  /**
   * function to stop the time
   * thi will set pause to false and the stop to true
   */
  function stopTime() {
    setStop(true);
    setPaused(false);
  }

  /**
   * reset timer function
   * this will reset all the records
   */
  function resetTimer() {
    setStop(true);
    setPaused(false);
    // result the values
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  /**
   * function to count time
   */
  function countTime() {
    if (!stop && !paused) {
      setHours((prev) => prev + 1);
      setMinutes((prev) => prev + 1);
      setSeconds((prev) => prev + 1);
    }
  }

  return { startTimer, pauseTimer, stopTime, resetTimer };
}
