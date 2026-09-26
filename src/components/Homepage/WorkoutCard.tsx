import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link href={`/Workout/${workout.id}`}>

      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#141519] transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/5">
        {/* Workout Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          
        </div>

        {/* Workout Information */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-lg font-bold text-white transition group-hover:text-lime-400">
            {workout.name}
          </h3>
          
          {/* Equipment */}
          <p className="mt-2 text-sm text-zinc-400">
            {workout.equipment}
          </p>

          {/* Workout Stats */}
          <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4 text-sm text-zinc-400">
            <span> {workout.duration} min</span>
            <span>{workout.caloriesBurned} kcal</span>
            <span className="text-yellow-400">★ {workout.rating}</span>
          </div>
        </div>
      </div>
    
    </Link>
  );
};

export default WorkoutCard;