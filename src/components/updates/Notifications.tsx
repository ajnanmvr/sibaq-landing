"use client";
import BellIcon from "@/assets/vector/bell.svg";
import Image from "next/image";
import AOS from "aos";
import { Fragment, useEffect } from "react";
import Link from "next/link";

const NotificationData = [
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for intalled now controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    link: "#",
  },
];
export default function Notifications() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center gap-2 items-center my-10 flex-wrap px-8">
      {NotificationData.map(({ title, category, time, link }, key) => (
        <Fragment key={key}>
          <Link
            href={link}
            data-aos="fade-in"
            className="px-4 py-6 gap-4 flex w-full hover:bg-blue/10 rounded-[1.8rem]"
          >
            <Image src={BellIcon} alt="Bell Icon" className="scale-75 " />
            <div className="flex flex-col  gap-2 ">
              <p className="text-[1.35rem] leading-6 tracking-tighter font-medium ml-1 line-clamp-2">
                {title}
              </p>
              <div className="flex  items-center  gap-2 flex-wrap">
                <p className="bg-blue bg-opacity-10 text-sm rounded-full inline px-3 py-0.5 font-light">
                  {category}
                </p>
                <p className="opacity-40 text-xs">{time}</p>
              </div>
            </div>
          </Link>
          <hr
            className={`h-[1.5px] w-full bg-blue/10 ${
              NotificationData.length === key + 1 && "hidden"
            }`}
          />
        </Fragment>
      ))}
    </div>
  );
}
