import Image from "next/image";

const WorkoutCard = ({ workout }: { workout: any }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#141519] transition duration-300 hover:-translate-y-1 hover:border-lime-400">

      <div className="relative h-52 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          {workout.equipment}
        </p>
      </div>

    </div>
  );
};

export default WorkoutCard;