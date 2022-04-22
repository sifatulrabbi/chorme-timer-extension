import React from "react";
import Header from "./components/Header";
import TimerProvider, { useTimerContext } from "./contexts/timer.context";
import useTimer from "./hooks/useTimer";

function App() {
  const [tab, setTab] = React.useState(0);
  const { hours, minutes, seconds } = useTimerContext();
  const { startTimer, stopTime, resetTimer } = useTimer();

  return (
    <TimerProvider>
      <Header tab={tab} setTab={setTab} />
      {tab === 0 ? (
        <div className="tab">
          <div className="timebox">
            <span className="hours">{hours}</span>:
            <span className="minutes">{minutes}</span>:
            <span className="seconds">{seconds}</span>
          </div>
          <div className="tab-bottom">
            <button className="action-btn" onClick={startTimer}>
              Start
            </button>
            <button className="action-btn" onClick={stopTime}>
              Stop
            </button>
            <button className="action-btn" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div className="tab"></div>
      )}
    </TimerProvider>
  );
}

export default App;
