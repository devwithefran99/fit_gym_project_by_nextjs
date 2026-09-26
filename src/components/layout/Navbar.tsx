"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();

const isWorkoutActive =
  pathname === "/" || pathname.startsWith("/workout");

const isMyPlanActive = pathname === "/my-plan";
  const { plan, saved } = useContext(WorkoutContext);
  return (
    <nav className="border-b border-zinc-800 bg-[#0b0c0f]">
      <div className="container mx-auto flex h-14 items-center justify-between px-5">
        
      
        <div className="flex items-center gap-3">
        
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-48 rounded-box border border-zinc-800 bg-[#0b0c0f] p-2 shadow-lg"
            >
              <li>
                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white" >
                  Workouts
                </Link>
              </li>
              <li>
                <Link href="/my-plan" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white" >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FitLog" width={24} height={24} />
            <span className="text-sm font-bold tracking-wide text-white">
              FITGYM
            </span>
          </Link>
        </div>

        
       <div className="hidden items-center gap-2 lg:flex">
  <Link href="/" className={`rounded-full px-4 py-2 text-sm font-medium transition ${
      isWorkoutActive
        ? "bg-lime-400 text-black"
        : "text-zinc-400 hover:text-white"
    }`} >
    Workouts
  </Link>

  <Link
    href="/my-plan"
    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
      isMyPlanActive
        ? "bg-lime-400 text-black"
        : "text-zinc-400 hover:text-white"}`}>
   My Plan
  </Link>
</div>

        
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black"
          >
            Plan <span className="ml-1">{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300"
          >
            Saved <span className="ml-1">{saved.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;