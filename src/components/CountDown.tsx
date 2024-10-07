"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CalenderIcon from "@/assets/vector/calender.svg";
import { COUNTDOWN_DATE } from "@/libs/constanants";
import AOS from "aos";
import "aos/dist/aos.css";

function CountDown() {
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:mx-28 flex flex-col md:flex-row justify-between items-center mb-20 p-5">
      <div className="flex flex-col justify-center items-center md:items-start">
        <p className="text-4xl text-center md:text-left md:text-[45px] font-medium mb-1 tracking-tighter">Commencing In</p>
        <Link href="" className="bg-r rounded-full py-1 pl-1.5 pr-5 text-xl gap-2 text-white items-center pr inline-flex">
          <Image src={CalenderIcon} className="scale-90" alt="Calendar Icon" />
          Add to Calendar
        </Link>
      </div>

      <div className="flex gap-5 items-center justify-center flex-wrap">
        <div className="text-center">
          <div className="bg-g text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            {timeLeft.days}
          </div>
          <p className="text-3xl font-light">Days</p>
        </div>
        <div className="text-center">
          <div className="bg-y text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            {timeLeft.hours}
          </div>
          <p className="text-3xl font-light">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-b text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            {timeLeft.minutes}
          </div>
          <p className="text-3xl font-light">Minutes</p>
        </div>
        <div className="text-center">
          <div suppressHydrationWarning={true} className="bg-r text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            {timeLeft.seconds}
          </div>
          <p className="text-3xl font-light">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;