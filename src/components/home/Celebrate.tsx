"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Celebrate() {
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

      const particleCount = 70 * (timeLeft / duration);

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
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div
      onClick={handleClick}
      className="md:h-16 -mt-2 p-1 bg-four-color rounded-full cursor-pointer"
    >
      <button className="h-full py-2 px-3 md:px-5 grid place-items-center tracking-tighter font-medium rounded-full bg-white text-xl md:text-2xl">
        Celebrate 🎉
      </button>
    </div>
  );
}
