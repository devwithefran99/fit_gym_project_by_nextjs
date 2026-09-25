"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";

const WorkoutActions = ({ workout }: { workout: any }) => {
  const { plan, setPlan, saved, setSaved } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.warning("Workout already added to your plan!");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Workout added to today's plan!");
  };

  const handleSave = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.warning("Workout already saved!");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Workout saved for later!");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {/* Add to Plan Button */}
      <button
        onClick={handleAddToPlan}
        className="rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
      >
        + Add to Today&apos;s Plan
      </button>

      {/* Save for Later Button */}
      <button
        onClick={handleSave}
        className="rounded-full border border-zinc-700 px-6 py-3 font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
      >
        ♡ Save for Later
      </button>
    </div>
  );
};

export default WorkoutActions;