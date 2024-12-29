"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CalenderIcon from "@/assets/vector/calender.svg";
import { COUNTDOWN_DATE } from "@/libs/constanants";

export default function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(COUNTDOWN_DATE);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="md:px-28 flex flex-col md:flex-row justify-between items-center pb-1 md:pb-16 p-5 gap-5 mt-20 md:gap-0 w-full">
      <div className="flex flex-col justify-center items-center gap-1 md:items-start">
        <p className="text-[2rem] leading-8 text-center md:text-left md:text-[45px] font-medium mb-2 md:mb-6 tracking-tighter">
          Grand Finale
        </p>
        <p className="font-light tracking-widest uppercase md:hidden">
          starts in
        </p>
        <Link
          href=""
          className="bg-red rounded-full py-1 pl-1.5 pr-5 text-xl gap-2 text-white items-center hidden md:inline-flex"
        >
          <Image src={CalenderIcon} className="scale-90" alt="Calendar Icon" />
          Add to Calendar
        </Link>
      </div>

      <div className="flex gap-3 md:gap-5 items-center justify-center flex-wrap">
        <div className="flex gap-3 md:gap-5 items-center justify-center">
          <div className="text-center">
            <div className="bg-green text-3xl md:text-[48px] mb-1 md:mb-2 rounded-full w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 inline-flex items-center justify-center text-white font-bold p-1">
              {timeLeft.days}
            </div>
            <p className="text-lg md:text-3xl font-light">Days</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow text-3xl md:text-[48px] mb-1 md:mb-2 rounded-full w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 inline-flex items-center justify-center text-white font-bold p-1">
              {timeLeft.hours}
            </div>
            <p className="text-lg md:text-3xl font-light">Hours</p>
          </div>
        </div>
        <div className="flex gap-3 md:gap-5 items-center justify-center">
          <div className="text-center">
            <div className="bg-blue text-3xl md:text-[48px] mb-1 md:mb-2 rounded-full w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 inline-flex items-center justify-center text-white font-bold p-1">
              {timeLeft.minutes}
            </div>
            <p className="text-lg md:text-3xl font-light">Minutes</p>
          </div>
          <div className="text-center">
            <div
              suppressHydrationWarning={true}
              className="bg-red animate-pulse text-3xl md:text-[48px] mb-1 md:mb-2 rounded-full w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 inline-flex items-center justify-center text-white font-bold p-1"
            >
              {timeLeft.seconds}
            </div>
            <p className="text-lg md:text-3xl font-light">Seconds</p>
          </div>
        </div>
      </div>

      <Link
        href=""
        className="text-white items-center mt-4 md:hidden inline-flex"
      >
        <Image
          src={CalenderIcon}
          className="border-[5px] z-10 box-content rounded-full border-red"
          alt="Calendar Icon"
        />
        <p className="bg-red rounded-r-full -ml-3 py-1.5 pl-4 pr-4 text-lg">
          Add to Calendar
        </p>
      </Link>
    </div>
  );
}
