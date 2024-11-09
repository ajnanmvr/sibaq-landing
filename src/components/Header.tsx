"use client";
import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header({
  pageTitle,
  keywords,
}: {
  pageTitle?: string;
  keywords: string[];
}) {
  const path = usePathname();
  const slide = [...keywords, ...keywords, ...keywords, ...keywords];
  return (
    <header
      className={`top-0 w-full z-10 ${path !== "/" ? "bg-white" : "fixed"}`}
    >
      <div className="flex justify-between max-h-40 items-center px-10 py-5">
        <div className="flex-1 pl-20">
          <Image
            src={Logo}
            alt="Logo Sibaq"
            className={`h-10 md:h-16 w-min my-8 ${path === "/" && "opacity-0"}`}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-gradient capitalize text-center">
            {pageTitle}
          </h1>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="opacity-50 w-full overflow-hidden -mt-3">
        <div className="flex capitalize text-2xl w-[calc(100px*17)] gap-2 animate-scroll items-center">
          {keywords.map((keyword, key) => (
            <span
              key={key}
              className={
                key % 4 === 0
                  ? "text-red"
                  : key % 4 === 1
                  ? "text-yellow"
                  : key % 4 === 2
                  ? "text-blue"
                  : "text-green"
              }
            >
              {keyword}
            </span>
          ))}
          {slide.map((keyword, key) => (
            <span
              key={key}
              className={
                key % 4 === 0
                  ? "text-red"
                  : key % 4 === 1
                  ? "text-yellow"
                  : key % 4 === 2
                  ? "text-blue"
                  : "text-green"
              }
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
