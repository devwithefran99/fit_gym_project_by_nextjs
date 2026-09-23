import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-[#0b0c0f]">
      <div className=" container mx-auto flex h-14 items-center justify-between px-5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
  src="/logo.png"
  alt="FitLog"
  width={24}
  height={24}
/>
          <span className="text-sm font-bold tracking-wide text-white">
            FITGYM
          </span>
        </Link>

        <div className="flex items-center gap-2">
  <Link
    href="/"
    className="rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black"
  >
    Workouts
  </Link>

  <Link
    href="/my-plan"
    className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white"
  >
    My Plan
  </Link>
</div>

<div className="flex items-center gap-2">
  <Link
    href="/my-plan"
    className="rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black"
  >
    Plan <span className="ml-1">0</span>
  </Link>

  <Link
    href="/my-plan"
    className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300"
  >
    Saved <span className="ml-1">0</span>
  </Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;