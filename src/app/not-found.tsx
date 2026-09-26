import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#0b0c0f] px-5">
      <div className="max-w-lg text-center">
        <p className="text-7xl font-extrabold text-lime-400">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          The page you are looking for does not exist or may have been moved.
          Return to the workout library and continue your training.
        </p>

        <Link href="/" className="mt-8 inline-flex rounded-full bg-lime-400 px-7 py-3 text-sm font-bold text-black transition hover:bg-lime-300">
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;