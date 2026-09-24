import React from "react";
import WorkoutCard from "./WorkoutCard";

const Library = ({ workouts }: { workouts: any[] }) => {
  return (
    <section id="library" className="bg-[#0b0c0f] px-5 py-16">
      <div className="container mx-auto">

        {/* Library Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium tracking-widest text-lime-400">
            THE LIBRARY
          </p>

          <h2 className="text-3xl font-bold text-white">
            ALL WORKOUTS
          </h2>

          <p className="mt-2 text-zinc-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Library;