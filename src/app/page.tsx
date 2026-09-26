import Hero from "@/components/Homepage/Hero";
import Library from "@/components/Homepage/Library";

const Home = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts = await response.json();

  console.log(workouts);

  return (
    <main>
       <Hero />

       <Library workouts={workouts} />
     
    </main>
  );
};

export default Home;