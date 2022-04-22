import React from "react";

type ISetStateValue<T> = T | ((prev: T) => T);

type ISetState<T> = (value: ISetStateValue<T>) => void;

interface ITimerContext {
  hours: number;
  minutes: number;
  seconds: number;
  setHours: ISetState<number>;
  setMinutes: ISetState<number>;
  setSeconds: ISetState<number>;
}

// initial context with mock values
const TimerContext = React.createContext<ITimerContext>({
  hours: 0,
  minutes: 0,
  seconds: 0,
  setHours: (value: ISetStateValue<number>) => {},
  setMinutes: (value: ISetStateValue<number>) => {},
  setSeconds: (value: ISetStateValue<number>) => {},
});

// use hook for quickly getting the context values
export function useTimerContext() {
  return React.useContext(TimerContext);
}

// context provider component
const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const value = { hours, minutes, seconds, setHours, setMinutes, setSeconds };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
