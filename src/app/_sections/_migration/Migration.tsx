import Image from "next/image";
import Link from "next/link";

import Calendar from "./calendar.png";
import Checkmark from "./checkmark.png";
import OrangeX from "./x.png";

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
          <span className="tracking-widest text-md text-[#FFF0BC] self-start lg:mb-6">
            Migration
          </span>
          {/* Text Column */}
          <div className="w-full lg:pt-0">
            <h1 className="text-5xl lg:text-6xl font-semibold text-[#FFF0BC] leading-tight w-full lg:w-2/3 mb-6">
              <span className="text-[#FF6333]">Easy</span> Migration from
              Firebase Dynamic Links
            </h1>

            <p className="text-[#FFF0BC] mt-6 text-lg lg:text-2xl w-full lg:w-[45%] font-light leading-relaxed mb-6">
              Google has announced that Firebase Dynamic Links will be
              discontinued on August 25, 2025. After this date:
            </p>

            <ul className="mt-10 space-y-4 text-lg mb-6 font-light">
              <li className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={OrangeX}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#FFF0BC] leading-relaxed">
                  You won&apos;t be able to create new dynamic links.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={OrangeX}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#FFF0BC] leading-relaxed">
                  Existing links may stop functioning properly.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  className="h-[14px] w-auto"
                  src={OrangeX}
                  alt={""}
                  width={400}
                  height={200}
                />
                <p className="text-[#FFF0BC] leading-relaxed">
                  Firebase support for deep links will no longer be available.
                </p>
              </li>
            </ul>

            <p className="text-[#FFF0BC] mt-10 text-md md:text-lg leading-relaxed font-light">
              With Firebase Dynamic Links set to deprecate, it&apos;s time to
              switch to a future-proof solution. Beyond Link makes migration
              effortless, ensuring your deep links continue to work without
              disruption.
            </p>

            <p className="text-[#FFF0BC] mt-4 text-md md:text-lg leading-relaxed font-light">
              So, Firebase Dynamic Links are shutting down, but your deep
              linking doesn&apos;t have to. Beyond Link provides a hassle-free
              migration process, ensuring your links remain functional and
              optimized for the future.
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
                  Easy Migration
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
                  Zero Downtime
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
                  Advanced Analytics
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
                  Custom Branding
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
                  Scalable &amp; Reliable
                </p>
              </div>
            </div>

            {/* Call-to-action Button */}

            <Link href={"/blog"} className="flex justify-center">
              <button className="mt-10 w-full md:w-auto inline-flex justify-center items-center px-14 py-3 bg-[#FFF0BC] hover:bg-[#e2d5a7] text-black rounded-md font-medium cursor-pointer transition-colors">
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
