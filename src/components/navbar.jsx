"use client";
import Link from "next/link";
import { useState, React } from "react";
import Image from 'next/image';
import NavLink from "./NavLink";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* main nav */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink key={index} link={link}/>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="bg-black text-sm rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Abhay</span>
          <span className=" text-black w-12 h-8 rounded bg-white flex items-center justify-center ">
            .Gupta
          </span>
        </Link>
      </div>
      {/* main nav links */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"> </div>
          <div className="w-10 h-1 bg-white rounded"> </div>
          <div className="w-10 h-1 bg-white rounded"> </div>
        </button>

        {/* MENU LIST */}
        {open && (
          <div className="absolute bg-black text-white top-0 left-0 h-screen w-screen flex flex-col justify-center items-center gap-8 ">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
