import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0b0c0f] px-5 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={24}
            height={24}
          />

          <span className="text-base font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard,
          log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;