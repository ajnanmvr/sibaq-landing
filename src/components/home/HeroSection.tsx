"use client";
import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import LeftSide from "@/assets/vector/landing/leftside-pattern.svg";
import RightSide from "@/assets/vector/landing/rightside-pattern.svg";
// import Sea from "@/assets/vector/landing/sea.svg";
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
    <div className="home w-full relative min-h-[100svh] flex items-center justify-center">
      <div className="md:py-20 bg-white/70 backdrop-blur-sm rounded-[3rem] p-10 flex flex-col justify-center items-center gap-8">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 md:h-20 w-min" />
        <div className="md:text-[4.3rem] text-center text-[2.5rem] leading-[2.5rem] sm:text-5xl md:leading-[4.3rem] tracking-tighter">
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
          className="md:h-16 -mt-2 p-1 bg-four-color rounded-full cursor-pointer"
        >
          <button className="h-full py-2 px-3 md:px-5 grid place-items-center tracking-tighter font-medium rounded-full bg-white text-xl md:text-2xl">
            Celebrate 🎉
          </button>
        </div>
      </div>
        <Image src={LeftSide} alt="Left Side" className="h-screen -z-10 object-cover absolute left-0" />
        <Image src={RightSide} alt="Right Side" className="h-screen -z-10 absolute object-cover -right-0" />

      {/* <Image
        src={Sea}
        alt="Right Side"
        className="w-screen absolute bottom-0"
      /> */}


    </div>
  );
};

export default HeroSection;
