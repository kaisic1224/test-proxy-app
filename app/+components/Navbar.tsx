import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-2  bg-indigo-700 py-3 justify-center">
      <Link href={"/"} className="text-white hover:underline hover:opacity-50">
        Home
      </Link>
      <Link
        href={"/contact"}
        className="text-white hover:underline hover:opacity-50"
      >
        Contact
      </Link>
      <Link href={"/about"} className="text-white hover:underline :opacity-50">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
