import Image from "next/image";
import Link from "next/link";

import Calendar from "./calendar.png";
import Checkmark from "./checkmark.png";

export default function Migration() {
  return (
    <section
      className="bg-[#09090B] py-28 relative overflow-hidden h-auto font-outfit"
      id="migration"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-full">
        {/* Large Background Number "01" */}
        <span className="absolute right-0 lg:left-12 top-[-40px] text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          01
        </span>

        {/* Main Content */}
        <div className="relative flex flex-col items-start lg:items-center justify-between h-full z-10">
          {/* Text Column */}
          <div className="w-full lg:pt-0">
            <h1 className="text-5xl lg:text-6xl font-semibold text-[#FFF0BC] leading-tight w-full lg:w-2/3 mb-6">
              <span className="text-[#FF6333]">Effortless</span> shift from basic voice analytics to deep audio
              intelligence
            </h1>

            <p className="text-[#FFF0BC] mt-6 text-lg lg:text-2xl w-full lg:w-[80%] font-light leading-relaxed mb-6">
              Traditional audio tools only scratch the surface. neurotone goes further, detecting emotions,
              tone, and speaking patterns with precision.
            </p>

            <p className="text-[#FFF0BC] mt-6 text-lg lg:text-2xl w-full lg:w-[80%] font-light leading-relaxed mb-6">
              {`So, your current voice analysis is reaching its limit, but your insights don’t have to.
              neurotone ensures a smooth transition to smarter, deeper, and more actionable audio
              intelligence.`}
            </p>

            <p className="text-[#FFF0BC] mt-10 text-md md:text-lg leading-relaxed font-light">
              Outdated or shallow analytics platforms can miss key insights hidden in voice. Neurotone
              makes it easy to upgrade, offering real-time, high-resolution analysis that brings true
              understanding to every conversation.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap w-full gap-x-6 gap-y-3 mt-10 justify-between">
              <div className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={Checkmark}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#22F5EF] text-base lg:text-lg">
                  Seamless Migration
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={Checkmark}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#22F5EF] text-base lg:text-lg">
                  Real-Time Emotion Detection
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={Checkmark}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#22F5EF] text-base lg:text-lg">
                  Speaker-Level Insights
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={Checkmark}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#22F5EF] text-base lg:text-lg">
                  Scalable & Secure
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={Checkmark}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#22F5EF] text-base lg:text-lg">
                  Actionable Audio Metrics
                </p>
              </div>
            </div>

            {/* Call-to-action Button */}

            <Link href={""} className="flex justify-center">
              <button
                className="mt-10 w-full md:w-auto inline-flex justify-center items-center px-14 py-3 bg-[#FFF0BC] hover:bg-[#e2d5a7] text-black rounded-md font-medium cursor-pointer transition-colors">
                READ MORE
              </button>
            </Link>
          </div>
          {/* Absolute Calendar Image */}
          <Image
            className="hidden lg:flex absolute w-[30%] h-auto right-0 top-1/2 -translate-y-4/5"
            src={Calendar}
            alt=""
            width={1440}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
}
