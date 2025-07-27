"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollDown from "./scroll-down.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 You have successfully subscribed!");
        setEmail("");

        // Google Tag tracking event on successful subscription
        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-394525042/subscription",
            event_category: "Newsletter",
            event_label: "Newsletter Signup",
            value: 1,
          });
        }
      } else {
        setMessage(`🚫 ${data.error || "Something went wrong. Try again."}`);
      }
    } catch (error) {
      setMessage("🚫 Network error. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full text-[#FFF0BC] py-20 px-8 flex justify-center h-auto overflow-hidden font-outfit"
      id="hero"
      style={{
        background: "radial-gradient(circle at top, #54221f 1%, #09090B 34%)",
      }}
    >
      <div className="max-w-[1440px] flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-light -mb-20 mt-8 min-[500px]:-mb-30 min-[580px]:-mb-36 sm:-mb-30 md:-mb-40 lg:-mb-50 xl:-mb-74 sm:mt-12 md:mt-16 z-10">
          <span className="text-[#FF6333] font-normal">neurotone</span> Where tone meets
          <p className="text-[#FF6333] font-normal">
            intelligence<span className="text-[#FFF0BC]">.</span>{" "}
          </p>
        </h1>

        <div className="scale-300 sm:scale-250 md:scale-200 lg:scale-150 xl:scale-105 opacity-85 inset-0 bg-no-repeat bg-center bg-cover">
          <Image
            src="/images/lines.png"
            width={1440}
            height={1080}
            quality={100}
            priority
            alt="Decorative lines"
            className="w-full h-auto max-w-[1440px] select-none pointer-events-none lg:-mt-14"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-lg md:text-xl font-light mb-6 mt-20 md:mt-30 lg:mt-10 xl:-mt-36 z-10">
            neurotone turns raw audio into emotional and behavioral insight, with powerful voice
            analysis made simple and scalable.
            <br/> Hear more than words, understand
            <span className="text-[#FF6333]"> emotions</span>,
            <span className="text-[#FF6333]"> tone</span>, and
            <span className="text-[#FF6333]"> intent</span>.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <p className="mb-4 text-sm font-light text-center text-[#FFF0BC]">
              {`Subscribe for early access and don't miss out on the nextevolution in deep linking.`}
            </p>

            <div className="w-full md:w-auto">
              {/* Desktop version */}
              <div
                className="hidden md:flex items-center border border-[#FFF0BC] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg focus-within:shadow-lg">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your mail"
                  className="px-4 py-3 bg-transparent text-white placeholder-[#FFF0BC] focus:outline-none w-full md:w-[300px]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 m-[3px] rounded-md py-3 bg-[#FF6333] text-black font-semibold whitespace-nowrap transition duration-300 hover:bg-orange-600 hover:text-white disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "SUBMITTING..." : "JOIN THE WAITLIST"}
                </button>
              </div>

              {/* Mobile version */}
              <div className="md:hidden">
                <div
                  className="border border-[#FFF0BC] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg focus-within:shadow-lg">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail"
                    className="px-4 py-3 bg-transparent text-white placeholder-[#FFF0BC] focus:outline-none w-full"
                  />
                </div>
                <div className="mt-4 w-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 rounded-md bg-[#FF6333] text-black font-semibold whitespace-nowrap transition duration-300 hover:bg-orange-600 hover:text-white disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "SUBMITTING..." : "JOIN THE WAITLIST"}
                  </button>
                </div>
              </div>
            </div>

            {/* Response message */}
            {message && <p className="mt-4 text-sm font-medium">{message}</p>}
          </form>

          <div className="flex justify-center mt-16 animate-bounce w-auto">
            <Image
              className="w-auto h-20"
              src={ScrollDown}
              alt="Scroll down"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
