"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { Workout } from "@/types/workout";

type WorkoutContextType = {
  plan: Workout[];
  setPlan: Dispatch<SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: Dispatch<SetStateAction<Workout[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
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