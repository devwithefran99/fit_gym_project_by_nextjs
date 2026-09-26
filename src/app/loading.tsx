const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0f] px-5">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

        <h2 className="mt-6 text-xl font-bold text-white">
          Loading Workouts
        </h2>
      </div>
    </main>
  );
};

export default Loading;