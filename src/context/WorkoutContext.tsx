"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

type WorkoutContextType = {
  plan: any[];
  setPlan: React.Dispatch<React.SetStateAction<any[]>>;
  saved: any[];
  setSaved: React.Dispatch<React.SetStateAction<any[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<any[]>([]);
  const [saved, setSaved] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from LocalStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setIsLoaded(true);
  }, []);

  // Save data to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [plan, saved, isLoaded]);

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