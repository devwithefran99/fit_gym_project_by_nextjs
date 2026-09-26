import Image from "next/image";
import Link from "next/link";
import WorkoutActions from "@/components/workout/WorkoutActions";

const WorkoutDetailsPage = async ({params}: {
  params: Promise<{ id: string }>;}) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0f] px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Workout Not Found
          </h1>

          <Link href="/" className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-3 font-bold text-black" >
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  const workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-12">
      <div className="container mx-auto max-w-7xl">

        
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400" >
           Back to Workouts
        </Link>

        
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

         
          <div className="relative h-[400px] overflow-hidden rounded-2xl border border-zinc-800 sm:h-[550px] lg:h-[730px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          
          <div className="flex flex-col">

          
            <h1 className="text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

           
            <p className="mt-4 text-base leading-7 text-zinc-400">
              {workout.description}
            </p>

            
            <div className="mt-5 flex flex-wrap gap-3">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl border border-zinc-800 bg-[#141720]">

             
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Equipment
                </span>

                <span className="text-right text-sm text-zinc-200">
                  {workout.equipment}
                </span>
              </div>

           
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Difficulty
                </span>

                <span className="text-right text-sm text-zinc-200">
                  {workout.difficulty}
                </span>
              </div>

           
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Sets
                </span>

                <span className="text-sm text-zinc-200">
                  {workout.sets}
                </span>
              </div>

              
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Reps
                </span>

                <span className="text-sm text-zinc-200">
                  {workout.reps}
                </span>
              </div>

             
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Duration
                </span>

                <span className="text-sm text-zinc-200">
                  {workout.duration} min
                </span>
              </div>

              
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Calories
                </span>

                <span className="text-sm text-zinc-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Rating
                </span>

                <span className="text-sm text-zinc-200">
                  {workout.rating}
                </span>
              </div>
            </div>

            
            <section className="mt-8">
              <h2 className="text-base font-bold uppercase tracking-wider text-white">
                Instructions
              </h2>

              <div className="mt-4 space-y-4">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <div key={index} className="flex items-start gap-3" >
                      <span className="text-sm text-zinc-500">
                        {index + 1}.
                      </span>

                      <p className="text-sm leading-6 text-zinc-300">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

           
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;