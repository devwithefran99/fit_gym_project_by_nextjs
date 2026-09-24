import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0b0c0f] px-5 py-16">
      <div className="container mx-auto flex items-center justify-between gap-10">

        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Structured workouts for every goal. Train with purpose, track your
            progress, and build consistency one session at a time.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black"
          >
            BROWSE WORKOUTS
            <span>→</span>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/banner.png"
            alt="Workout training"
            width={600}
            height={500}
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;