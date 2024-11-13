"use client";
import BellIcon from "@/assets/vector/bell.svg";
import Image from "next/image";
import AOS from "aos";
import { useEffect, useState } from "react";
import { TNotification } from "@/libs/types";
import SingleNotification from "../SingleNotification";
import Bell from "@/assets/vector/Bell";

const NotificationData: TNotification[] = [
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    url: "#",
  },
  {
    title: "Results are out now for intalled now controllers",
    category: "Aliya Category",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, dignissimos voluptatibus suscipit laudantium praesentium totam dicta eos, cumque, laborum adipisci dolores velit nobis deserunt? Aperiam quisquam veniam repellendus odio ipsam.",
    time: "Today 11:15PM",
    url: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    url: "#",
  },
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    url: "#",
  },
];
export default function Notifications() {
  const [selectedNotification, setSelectedNotification] =
    useState<null | TNotification>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const openPopup = (notification: TNotification) =>
    setSelectedNotification(notification);
  const closePopup = () => setSelectedNotification(null);

  return (
    <div className="flex justify-center gap-2 md:gap-4 items-center my-10 flex-wrap px-8">
      {NotificationData.map((notification, key) => (
        <div
          key={key}
          data-aos="fade-in"
          onClick={() => openPopup(notification)}
          className="cursor-pointer bg-blue md:text-center hover:bg-opacity-15 bg-opacity-10 px-4 py-6 gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center md:justify-center w-full md:w-[19rem] md:min-h-[21rem]"
        >
          <Bell className="rounded-full w-8 h-8 bg-blue md:w-10 md:h-10" />
          <div className="flex flex-col md:items-center gap-2 md:gap-4">
            <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0 line-clamp-2">
              {notification.title}
            </p>
            <div className="flex md:flex-col items-center md:justify-center gap-2 flex-wrap">
              <p className="bg-blue bg-opacity-10 text-sm rounded-full inline px-3 md:px-4 py-0.5 font-light">
                {notification.category}
              </p>
              <p className="opacity-40 text-xs">{notification.time}</p>
            </div>
          </div>
        </div>
      ))}
      <SingleNotification
        isOpen={!!selectedNotification}
        onClose={closePopup}
        data={selectedNotification}
      />
    </div>
  );
}
