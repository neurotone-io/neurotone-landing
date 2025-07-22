"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import lineLeft from "./line-left.png";
import lineRight from "./line-right.png";

interface CountdownProps {
  targetDate: string; // ISO format e.g. "2025-04-25T15:00:00"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = dayjs(targetDate).diff(dayjs(), "second");
    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference / (60 * 60)) % 24);
    const minutes = Math.floor((difference / 60) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const digitClass =
    "text-[#FF6333] font-digital text-3xl lg:text-4xl animate-pulse";

  return (
    <div className="flex flex-col items-center justify-center text-center text-[#FFF0BC] mb-6">
      <h2 className="lg:text-lg mb-4 font-light">We are coming soon</h2>

      <div className="flex items-center gap-4 sm:gap-8">
        {/* Left Line Image */}
        <Image
          src={lineLeft}
          alt="Decorative line left"
          className="h-[1px] lg:h-[2px] w-auto mb-6"
        />

        {/* Countdown Values */}
        <div className="flex items-center justify-center gap-3 sm:gap-8">
          <div className="flex flex-col items-center justify-center">
            <span className={digitClass}>{timeLeft.days}</span>
            <span className="mt-2">days</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className={digitClass}>{timeLeft.hours}</span>
            <span className="mt-2">hours</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className={digitClass}>{timeLeft.minutes}</span>
            <span className="mt-2">minutes</span>
          </div>
        </div>

        {/* Right Line Image */}
        <Image
          src={lineRight}
          alt="Decorative line right"
          className="h-[1px] lg:h-[2px] w-auto mb-6"
        />
      </div>
    </div>
  );
};

export default Countdown;
