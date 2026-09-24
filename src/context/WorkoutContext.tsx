"use client";

import { createContext, ReactNode , useState } from "react";

const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        setPlan,
        saved,
        setSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;