import Image, { StaticImageData } from "next/image";

import Shape1 from "./shape1.png";
import Shape2 from "./shape2.png";
import Shape3 from "./shape3.png";
import Link from "next/link";

export default function About() {
  interface CardProps {
    icon: StaticImageData | string;
    title: string;
    desc: string;
    bgColor: string; // Tailwind CSS class for background color
    textColor: string; // Tailwind CSS class for text color
  }

  // Card component with typed props
  const Card = ({ icon, title, desc, bgColor, textColor }: CardProps) => (
    <div
      className={`rounded-4xl p-6 ${bgColor} ${textColor} flex flex-col items-start gap-4 font-outfit`}
    >
      <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center">
        <Image
          className="w-auto h-full"
          src={icon}
          width={500}
          height={500}
          alt={"icon"}
        />
      </div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-xs font-light">{desc}</p>
      </div>
    </div>
  );

  return (
    <section
      className="bg-[#09090B] py-28 relative overflow-hidden lg:h-[85vh] font-outfit"
      id="about"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-full">
        {/* Large Background Number "02" */}
        <span className="absolute right-0 lg:left-12 top-0 text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          03
        </span>

        <div className="flex flex-col  lg:flex-row gap-12 items-center lg:items-start justify-between h-full">
          {/* Left Side */}
          <div className="flex flex-col justify-around w-full md:w-[45%] z-10 text-left items-start h-full">
            <span className="tracking-widest text-[#FFF0BC]">About Us</span>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#FFF0BC] mt-3 leading-tight">
              More <span className="text-[#FF6333]">about</span>
              <br />
              Beyond Link
            </h2>
            <p className="text-[#FFF0BC] font-light text-lg mt-5">
              {`With Firebase Dynamic Links set to deprecate on August 25, 2025, it's crucial to switch to a reliable deep linking solution. Beyond Link offers a straightforward migration process, ensuring your links remain functional without disruption.`}
            </p>
            <Link href="#Hero" className="w-full md:w-auto">
              <button className="mt-8 bg-[#FFF0BC] hover:bg-[#e7dfa9] transition-colors text-black font-semibold py-3 px-14 rounded-lg cursor-pointer w-full">
                SUBSCRIBE
              </button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex flex-col-reverse md:flex-col w-full md:w-[45%] z-10 h-full justify-end">
            <p className="text-[#FFF0BC] font-light md:mb-6 mt-6 md:mt-0 text-left text-lg">
              {`Understanding the challenges of transitioning, Beyond Link offers dedicated support to ensure a smooth migration. Our team is ready to guide you through each step, minimizing any potential disruptions.`}
            </p>

            {/* Cards Container */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Card
                  icon={Shape2}
                  title="100% Match Rate"
                  desc="Our platform provides 100% matching because we are letting the link page stay alive until you finish installing the app."
                  bgColor="bg-[#FF6333]"
                  textColor="text-white"
                />
                <Card
                  icon={Shape1}
                  title="Seamless Migration"
                  desc="Our platform provides 100% matching because we are letting the link page stay alive until you finish installing the app."
                  bgColor="bg-[#1A1A1A]"
                  textColor="text-white"
                />
              </div>
              <Card
                icon={Shape3}
                title="Real-Time Analytics"
                desc="Monitor link traffic in real time with our analytics dashboard to track user interactions and measure conversions effectively."
                bgColor="bg-[#FFF0BC]"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
