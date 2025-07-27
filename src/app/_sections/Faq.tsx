"use client";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is neurotone?",
      answer:
        "neurotone is an advanced AI-powered platform that deeply analyzes audio and video \n" +
        "recordings to uncover emotions, patterns, and key insights. Designed for businesses and \n" +
        "researchers, it transforms raw media into meaningful data, enabling smarter decisions and \n" +
        "richer understanding across industries.",
    },
    {
      question: "How does neurotone work",
      answer:
        "neurotone processes your audiofiles using advanced AI algorithms that analyze emotions, \n" +
        "speech patterns, and nonverbal cues. It combines multiple data streams to deliver detailed, \n" +
        "real-time insights, helping you understand every nuance in your recordings effortlessly.",
    },
    {
      question: "How easy is it to set up neurotone?",
      answer:
        "Getting started with neurotone is simple and hassle-free. Our user-friendly platform, clear \n" +
        "documentation, and dedicated support team make integration quick,so you can start gaining \n" +
        "valuable insights with minimal technical effort.",
    },
    {
      question: "How secure is my data with neurotone?",
      answer:
        "We take data security seriously. neurotone uses industry-standard encryption and strict access\n" +
        "controls to protect your audio and video files. Your data is stored securely and processed in \n" +
        "compliance with privacy regulations, giving you peace of mind throughout your analysis.",
    }
  ];

  return (
    <section
      className="bg-[#09090B] py-24 relative overflow-hidden font-outfit"
      id="faq"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        {/* Large Background Number "05" */}
        <span className="absolute right-0 lg:left-12 top-0 text-[220px] lg:text-[300px] font-bold text-gray-800 opacity-20 select-none pointer-events-none">
          06
        </span>

        <div className="flex flex-col items-center">
          <span className="tracking-widest text-sm font-semibold text-[#FFF0BC]">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFF0BC] mt-4 mb-12 text-left md:text-center">
            <span className="text-[#FF6333]">F</span>requently{" "}
            <span className="text-[#FF6333]">A</span>sked{" "}
            <span className="text-[#FF6333]">Q</span>uestions
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-2xl">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "bg-[#1A1A1A] brightness-110 p-6"
                      : "bg-[#1A1A1A] p-4"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full"
                  >
                    <span
                      className={`font-semibold transition duration-300  ${
                        isOpen ? "text-[#FF6333]" : "text-[#FF6333]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-[#f5f0c8]" : "bg-[#FF6333]"
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-[#FF6333]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-[#FFF0BC]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "max-h-40 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-sm text-[#FFF0BC] font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
