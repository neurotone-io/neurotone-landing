"use client";

import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

export default function CallToAction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-[#09090B] py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative flex items-center justify-center text-center">
        {/* Large Absolute Background Text */}
        <span
          className="hidden md:flex md:absolute inset-0 items-center justify-center text-[80px] lg:text-[180px] font-bold text-transparent opacity-10 select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px #FFF0BC" }}
        >
          Beyond Link
        </span>

        {/* Main Content */}
        <div className="relative z-10 space-y-8 md:space-y-16 font-outfit">
          <h2 className="text-5xl lg:text-5xl font-bold text-[#FFF0BC]">
            Ready to go <span className="text-[#FF6333]">Beyond?</span>
          </h2>
          <p className="text-[#FFF0BC] font-light mt-4 text-xl md:text-2xl">
            Subscribe and be among the first to
            <br /> know when we launch.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href={"#Hero"} className="w-full md:w-auto">
              <button className="bg-[#FFF0BC] hover:bg-[#e7dfa9] transition-colors text-black font-semibold py-3 px-8 rounded-lg cursor-pointer w-full md:w-auto">
                JOIN THE WAITLIST
              </button>
            </Link>

            <button
              onClick={() => setShowForm(true)}
              className="border-[1px] border-[#FFF0BC] bg-[#1A1A1A] hover:bg-[#FFF0BC] hover:text-black transition-colors text-[#FFF0BC] font-semibold py-3 px-8 rounded-lg cursor-pointer w-full md:w-auto"
            >
              Contact US
            </button>
          </div>
        </div>
      </div>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
