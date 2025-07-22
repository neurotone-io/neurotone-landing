"use client";

import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

export default function Strategy() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="bg-[#09090B] py-28 relative overflow-hidden lg:h-[85vh] font-outfit overflow-y-auto">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-full">
        {/* Large Background Number "03" */}
        <span className="absolute right-0 lg:left-12 top-0 text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          04
        </span>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:justify-between h-full">
          {/* Left Side Content */}
          <div className="flex flex-col w-full md:w-1/2 z-10 text-left h-full space-y-6 md:space-y-0 justify-around">
            <span className="tracking-widest text-sm font-semibold text-[#FFF0BC]">
              Strategy
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#FFF0BC] leading-snug">
              Let’s <span className="text-[#FF6333]">learn</span>
              <br />
              <span className="text-[#FF6333]">how</span> BL works
            </h2>
            <p className="text-[#FFF0BC] text-lg font-light">
              Beyond Link simplifies deep linking with a seamless, intuitive
              process. Generate, customize, and track your links effortlessly—no
              complex setup required. Watch the video to see how easy it is to
              get started!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4  justify-center lg:justify-start">
              <Link href="#Hero" className="w-full md:w-auto">
                <button className="bg-[#FFF0BC] hover:bg-[#d4cd9b] transition-colors text-black font-semibold py-3 px-8 rounded-lg cursor-pointer w-full md:w-auto">
                  SUBSCRIBE
                </button>
              </Link>
              <button
                onClick={() => setShowForm(true)}
                className="border border-[#FFF0BC] hover:bg-[#FFF0BC] hover:text-black transition-colors text-[#FFF0BC] font-semibold py-3 px-8 rounded-lg cursor-pointer w-full md:w-auto"
              >
                I have a question
              </button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="flex flex-col w-full md:w-1/2 items-end justify-end mb-12 h-full">
            <div className="w-full lg:w-[90%] h-[300px] lg:h-[90%] bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-xl">
              <button
                type="button"
                className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#FFF0BC] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
