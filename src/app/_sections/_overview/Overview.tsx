import Image from "next/image";
import Dashboard from "./dashboard.png";

export default function Overview() {
  interface FeatureItemProps {
    title: string;
    desc: string;
    accentColor: string; // Tailwind CSS class for the accent color
  }

  // FeatureItem component with typed props
  const FeatureItem = ({ title, desc, accentColor }: FeatureItemProps) => (
    <div className="flex items-start gap-4 font-outfit">
      <div
        className={`w-1 h-10 rounded-full ${accentColor} flex-shrink-0`}
      ></div>
      <div>
        <h3 className="font-semibold text-lg text-[#FF6333]">{title}</h3>
        <p className="text-sm text-[#FFF0BC] font-light">{desc}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#09090B] py-24 relative overflow-hidden font-outfit">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        {/* Large Background Number "04" */}
        <span className="absolute right-0 lg:left-12 top-0 text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          05
        </span>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:justify-between h-screen">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[50%] z-10">
            <span className="tracking-widest text-sm font-semibold text-[#FFF0BC]">
              Overview
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#FFF0BC] mt-3 leading-tight">
              <span className="text-[#FF6333]">All</span> the insight.
              <br />
              None of the noise.
            </h2>
            <p className="text-[#FFF0BC] font-light mt-5 max-w-xl">
              Focus on what matters with streamlined voice analysis, no complexity, just powerful tools
              built for clarity and action.
            </p>

            <div className="flex flex-col gap-6 mt-6 md:mt-[200px]">
              <FeatureItem
                title="Emotion-First Analysis"
                desc="Detect stress, confidence, hesitation, and more. Straight from voice."
                accentColor="bg-[#FF6333]"
              />
              <FeatureItem
                title="Speaker-Level Metrics"
                desc="Track individual speaking patterns and emotional shifts over time."
                accentColor="bg-[#1A1A1A]"
              />
              <FeatureItem
                title="Simple Setup"
                desc="Designed for fast onboarding. No technical barriers, just results."
                accentColor="bg-[#1A1A1A]"
              />
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div
            className="w-full md:w-[50%] h-full z-10 flex justify-center lg:justify-end items-end"
            id="dashboard"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                className="w-full h-auto brightness-50"
                src={Dashboard}
                alt="Dashboard"
                width={1920}
                height={1080}
              />

              {/* Diagonal Sliding Banner Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div
                  className="overflow-hidden bg-black/70 py-3"
                  style={{ transformOrigin: "center" }}
                >
                  <div className="whitespace-nowrap animate-slide">
                    <span className="text-[#FFF0BC] text-2xl md:text-4xl font-bold tracking-widest px-10">
                      • COMING SOON • COMING SOON • COMING SOON • COMING SOON •
                      COMING SOON • COMING SOON • COMING SOON • COMING SOON •
                      COMING SOON •
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
