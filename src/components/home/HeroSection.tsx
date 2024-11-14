"use client";
import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import LeftSide from "@/assets/vector/landing/leftside-pattern.svg";
import RightSide from "@/assets/vector/landing/rightside-pattern.svg";
import confetti from "canvas-confetti";
import localFont from "next/font/local";

const nippo = localFont({ src: "../../fonts/nippo.ttf" });

const HeroSection = () => {
  const handleClick = () => {
    const duration = 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="home w-full relative min-h-[100svh] flex items-center justify-between">
      <div className="flex-1">
        <Image src={LeftSide} alt="Left Side" className="w-auto h-[100svh]" />
      </div>{" "}
      <div className="md:py-20 py-10 px-10 flex flex-col justify-center items-center flex-1 gap-20">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 md:h-20 w-min" />
        <div className="md:text-[4.3rem] text-center text-5xl md:leading-[4.3rem] tracking-tighter">
          <h1 className={`${nippo.className} text-gradient font-medium`}>
            SIBĀQ 25
          </h1>
          <p className="font-light mt-0.5 md:mt-2">
            DHIU National <br />
            Arts Fest
          </p>
        </div>
        <div
          onClick={handleClick}
          className="h-16 p-1 bg-four-color rounded-full cursor-pointer hidden md:block"
        >
          <button className="h-full py-2 px-5 grid place-items-center tracking-tighter font-medium rounded-full bg-white text-2xl">
            Celebrate 🎉
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image src={RightSide} alt="Right Side" className="w-auto h-[100svh]" />
      </div>
    </div>
  );
};

export default HeroSection;
