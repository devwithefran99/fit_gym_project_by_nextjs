import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0b0c0f] px-5 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between">

        {/* Left Side - Text */}
        <div className="order-2 flex-1 text-center md:order-1 md:text-left">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-lime-400 md:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:mx-0 md:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 md:mx-0 md:text-base">
            Structured workouts for every goal. Train with purpose, track your
            progress, and build consistency one session at a time.
          </p>

          
          <a  href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black"
          >
            BROWSE WORKOUTS
            <span>→</span>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="order-1 w-full flex-1 max-w-sm md:order-2 md:max-w-none">
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