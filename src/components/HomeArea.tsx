"use client"

import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import Celebrate from "@/assets/static/celebrate-btn.png";
import Landing from "@/assets/static/sibaq-landing-image.png";
import Mobile from "@/assets/static/landing-mobile.png";
import confetti from 'canvas-confetti';
import localFont from "next/font/local";

const  nippo = localFont({src: '../fonts/nippo.ttf'});


const HomeArea = () => {
  const handleClick = () => {
    const duration = 5 * 1000;
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
    <div className="home w-full relative h-[100svh] flex flex-col items-center  md:flex-row">
      <div className="md:py-20 py-10 px-10 md:pl-32 flex flex-col justify-center gap-20">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 md:h-20 w-min" />
        <div className="md:text-[4.3rem] text-center md:text-left text-5xl md:leading-[4.3rem] tracking-tighter">
          <h1 className={`${nippo.className} text-gradient font-medium`}>SIBĀQ 25</h1>
          <p className="font-light mt-0.5 md:mt-2">
            DHIU National <br />
            Arts Fest
          </p>
        </div>
        {/* <Image
          src={Celebrate}
          alt="Logo Sibaq"
          quality={100}
          className="h-16 w-min hidden md:block"
          onClick={handleClick}
        /> */}
        <div onClick={handleClick} style={{backgroundImage: "linear-gradient(90deg, rgba(234,143,35,1) 0%, rgba(234,54,80,1) 33%, rgba(32,117,188,1) 66%, rgba(9,171,177,1) 100%)"}} className="w-52 h-16 p-1 rounded-full cursor-pointer hidden md:block">
          <div className="w-full h-full p-2 grid place-items-center font-medium rounded-full bg-white text-2xl">Celebrate 🎉</div>
        </div>
      </div>
      <Image
        src={Mobile}
        alt="Landing Sibaq"
        quality={100}
        className="w-screen md:hidden absolute bottom-0"
      />
      <div className="flex-1 relative h-screen py-3 md:w-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src={Landing}
          alt="Logo Sibaq"
          quality={100}
          className=" object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default HomeArea;
