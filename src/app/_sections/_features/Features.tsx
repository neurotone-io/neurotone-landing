import Image from "next/image";

import Vector1 from "./vector1.png";
import Vector2 from "./vector2.png";
import Vector3 from "./vector3.png";
import Vector4 from "./vector4.png";
import Link from "next/link";

// Define the type for the FeatureCard props
interface FeatureCardProps {
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode; // Assuming `icon` is a React component or element
}

export default function Features() {
  // Optimized Internal Card Component
  const FeatureCard = ({
    title,
    desc,
    bgColor,
    textColor,
    icon,
  }: FeatureCardProps) => (
    <div
      className={`w-full max-w-[260px] h-[260px] rounded-xl flex flex-col items-center justify-center font-outfit text-center p-6 ${bgColor} ${textColor}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">{icon}</div>
      <p className="text-sm font-light">{desc}</p>
    </div>
  );

  return (
    <section
      className="bg-[#09090B] py-28 relative overflow-hidden lg:h-[85vh] font-outfit"
      id="features"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-full">
        {/* Large Background Number "01" */}
        <span className="absolute right-0 lg:left-12 top-[-40px] text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          02
        </span>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-8 h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-around max-w-lg text-left w-full lg:w-1/2 h-full items-start">
            <span className="tracking-widest text-md  text-[#FFF0BC]">
              Features
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#FFF0BC] mt-2">
              Essential <br />
              <p className="text-[#FF6333] mt-2">Features</p>
            </h2>
            <p className="text-[#FFF0BC] font-light mt-6 text-lg">
              Powerful voice analysis tools that unlock the full potential of audio. neurotone delivers
              emotional clarity, behavioral insight, and speaker-level intelligence — all from sound.
            </p>
            <Link href="#Hero" className="w-full md:w-auto">
              <button className="mt-8 bg-[#fff0bc] hover:bg-[#e7dfa9] transition-colors text-black font-semibold py-3 px-14 rounded-lg cursor-pointer w-full">
                JOIN THE WAITLIST
              </button>
            </Link>
          </div>

          {/* Right Content (Features Grid) */}
          <div className="flex flex-col w-full lg:w-1/2 sm:flex-row gap-6 justify-center lg:justify-end">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 sm:mt-12 items-center">
              <FeatureCard
                title="Emotion Detection"
                desc="Analyzes the speaker’s voice to detect emotions like happiness, frustration, sadness, nervousness, neutrality, anger, or stres."
                bgColor="bg-[#FF6333]"
                textColor="text-black"
                icon={
                  <Image
                    src={Vector1}
                    alt={"line vector"}
                    width={500}
                    height={500}
                    className="w-auto h-[75%]"
                  />
                }
              />
              <FeatureCard
                title="Transcription and Semantic Analysis"
                desc="neurotone doesn’t just convert audio to text, it also understands the meaning behind the words."
                bgColor="bg-[#1A1A1A]"
                textColor="text-[#FFF0BC]"
                icon={
                  <Image
                    src={Vector3}
                    alt={"line vector"}
                    width={500}
                    height={500}
                    className="w-auto h-[75%]"
                  />
                }
              />
            </div>

            {/* Column 2 (offset vertically for staggered design) */}
            <div className="flex flex-col gap-6 items-center">
              <FeatureCard
                title="Speaking Style and Tone Metrics"
                desc="Neurotone analyzes how a person speaks, including speech speed, pitch variation, volume changes, pauses, and filler word usage."
                bgColor="bg-[#1A1A1A] "
                textColor="text-[#FFF0BC]"
                icon={
                  <Image
                    src={Vector2}
                    alt={"line vector"}
                    width={500}
                    height={500}
                    className="w-auto h-[75%]"
                  />
                }
              />
              <FeatureCard
                title="Emotional Progression Over Time"
                desc="Track how emotions evolve throughout the audio, from the first second to the last."
                bgColor="bg-[#FFF0BC]"
                textColor="text-black"
                icon={
                  <Image
                    src={Vector4}
                    alt={"line vector"}
                    width={500}
                    height={500}
                    className="w-auto h-[75%]"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
