"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the current page is the home page
  const isHome = pathname === "/";

  return (
    <>
      {/* Blurred Overlay appearing from the top */}
      <div
        className={`fixed inset-0 bg-[#09090B]/10 backdrop-blur-md pt-16 pb-16 z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium text-white">
          <Link
            href="/#features"
            className="hover:text-orange-300 transition-colors text-xl"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#about"
            className="hover:text-orange-300 transition-colors text-xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#dashboard"
            className="hover:text-orange-300 transition-colors text-xl"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/blog"
            className="hover:text-orange-300 transition-colors text-xl"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/#faq"
            className="hover:text-orange-300 transition-colors text-xl"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
        </div>
      </div>

      <nav
        className={`w-full fixed top-0 z-50 transition duration-300 font-outfit ${
          isHome
            ? scrolled
              ? "bg-white/2 backdrop-blur-md"
              : "bg-[#09090B]/12 backdrop-blur-0"
            : "bg-[#09090B]/75 backdrop-blur-md"
        } text-white py-4 px-8 flex justify-center`}
      >
        <div className="w-full max-w-[1440px] flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/bl-logo.png"
              width={1000}
              height={600}
              alt="Beyond Link Logo"
              className="h-8 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center gap-6 text-sm font-medium">
            <Link
              href="/#features"
              className="hover:text-orange-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#about"
              className="hover:text-orange-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#dashboard"
              className="hover:text-orange-300 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/blog"
              className="hover:text-orange-300 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/#faq"
              className="hover:text-orange-300 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
