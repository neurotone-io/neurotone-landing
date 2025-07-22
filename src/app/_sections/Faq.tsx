"use client";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is Beyond Link?",
      answer:
        "Beyond Link is an advanced deep linking platform that helps businesses and developers create seamless user experiences across web and mobile applications. It enables smart routing, cross-platform compatibility, and in-depth analytics, making it easier to connect users with the right content effortlessly.",
    },
    {
      question: "How it works?",
      answer:
        "Beyond Link works by automatically generating dynamic deep links that adjust based on user behavior, device type, and contextual factors. The platform integrates with your digital ecosystem to provide real-time insights and optimized routing.",
    },
    {
      question: "Is It Free to Use?",
      answer:
        "Beyond Link offers a flexible pricing model with a free tier for basic usage and premium plans that unlock advanced features. This makes it suitable for startups and large enterprises alike.",
    },
    {
      question: "How Easy Is It to Set Up?",
      answer:
        "Setting up Beyond Link is straightforward. With an intuitive interface, comprehensive documentation, and robust support, integration is quick and requires minimal technical expertise.",
    },
    {
      question: "Can It Generate Deep Links for iOS and Android?",
      answer:
        "Yes, Beyond Link is fully compatible with both iOS and Android platforms. It creates smart deep links that direct users to the appropriate app store or in-app content, enhancing the overall mobile experience.",
    },
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
