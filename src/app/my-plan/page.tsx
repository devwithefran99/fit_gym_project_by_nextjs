"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout";
import { MdCancel } from "react-icons/md";

type TabType = "plan" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { plan, setPlan, saved, setSaved } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<TabType>("plan");
  const [sortBy, setSortBy] = useState<SortType>("duration");
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  
  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort(
    (a: Workout, b: Workout) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    }
  );


  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const completedCount = completedWorkouts.filter((id) =>
    plan.some((workout) => workout.id === id)
  ).length;

  
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setPlan(plan.filter((workout) => workout.id !== id));

      setCompletedWorkouts(
        completedWorkouts.filter((workoutId) => workoutId !== id)
      );

      toast.success("Workout removed from your plan!");
    } else {
      setSaved(saved.filter((workout) => workout.id !== id));

      toast.success("Workout removed from saved list!");
    }
  };


  const handleMarkDone = (id: number) => {
    if (completedWorkouts.includes(id)) {
      toast.info("Workout already completed!");
      return;
    }

    setCompletedWorkouts([...completedWorkouts, id]);

    toast.success("Workout marked as completed!");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10">
      <div className="mx-auto max-w-7xl">
       
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-white">MY PLAN</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#272a35] bg-[#14151c] p-5 sm:grid-cols-3">
         
          <div className="border-b border-[#272a35] pb-4 sm:border-b-0 sm:border-r sm:pb-0">
            <p className="text-xs text-zinc-400">Exercises</p>

            <h2 className="mt-2 text-4xl font-extrabold text-lime-400">
              {plan.length}
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              {completedCount} completed
            </p>
          </div>

          
          <div className="border-b border-[#272a35] pb-4 sm:border-b-0 sm:border-r sm:px-8 sm:pb-0">
            <p className="text-xs text-zinc-400">Minutes</p>

            <h2 className="mt-2 text-4xl font-extrabold text-white">
              {totalMinutes}
            </h2>
          </div>

          
          <div className="sm:pl-8">
            <p className="text-xs text-zinc-400">Calories</p>

            <h2 className="mt-2 text-4xl font-extrabold text-white">
              {totalCalories}
            </h2>
          </div>
        </div>

       
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          
          <div
            role="tablist"
            className="tabs tabs-box rounded-xl border border-[#272a35] bg-[#14151c] p-1"
          >
            <button
              role="tab"
              aria-selected={activeTab === "plan"}
              onClick={() => setActiveTab("plan")}
              className={`tab h-10 rounded-lg px-5 text-sm ${
                activeTab === "plan"
                  ? "tab-active bg-[#252936] font-semibold text-white"
                  : "text-zinc-400"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "saved"}
              onClick={() => setActiveTab("saved")}
              className={`tab h-10 rounded-lg px-5 text-sm ${
                activeTab === "saved"
                  ? "tab-active bg-[#252936] font-semibold text-white"
                  : "text-zinc-400"
              }`}
            >
              Saved
            </button>
          </div>

         
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="select select-sm w-28 border border-[#272a35] bg-[#14151c] text-sm text-white"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        
        {sortedWorkouts.length > 0 ? (
          <div className="space-y-4">
            {sortedWorkouts.map((workout: Workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-[#272a35] bg-[#14151c] p-4 transition hover:border-zinc-600 md:flex-row md:items-center"
              >
               
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl md:h-20 md:w-36">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 144px"
                  />
                </div>

               
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-400">
                    {workout.equipment}
                  </p>

                 
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                    <span>
                      <span className="mr-1 text-lime-400">◷</span>
                      {workout.duration} min
                    </span>

                    <span>
                      <span className="mr-1 text-lime-400">♨</span>
                      {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      <span className="mr-1 text-lime-400">☆</span>
                      {workout.rating}
                    </span>
                  </div>
                </div>

              
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/Workout/${workout.id}`}
                    className="rounded-full border border-[#394052] px-5 py-2.5 text-center text-xs font-medium text-zinc-200 transition hover:border-lime-400 hover:text-lime-400"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => handleMarkDone(workout.id)}
                      disabled={completedWorkouts.includes(workout.id)}
                      className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                        completedWorkouts.includes(workout.id)
                          ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
                          : "bg-lime-400 text-black hover:bg-lime-300"
                      }`}
                    >
                      {completedWorkouts.includes(workout.id)
                        ? "Completed"
                        : "Mark as Done"}
                    </button>
                  )}

                  <button
                    onClick={() => handleRemove(workout.id)}
                    className="px-2 py-2 text-lg text-zinc-500 transition hover:text-red-400"
                    aria-label="Remove workout"
                    title="Remove workout"
                  >
                    <MdCancel />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-[#272a35] bg-[#14151c] px-5 py-12 text-center">
            <h2 className="text-xl font-bold text-white">
              Nothing added yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
              {activeTab === "plan"
                ? "Your plan is empty. Browse workouts and add exercises to get started."
                : "No saved workouts yet. Save your favorite exercises to find them here."}
            </p>

            <Link
              href="/#library"
              className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
              Browse Workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;