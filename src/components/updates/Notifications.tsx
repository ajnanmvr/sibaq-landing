"use client";
import Link from "next/link";
import Bell from "@/assets/vector/Bell";
import { useState } from "react";
import { TNotification } from "@/libs/types";
import SingleNotification from "../SingleNotification";

const NotificationData: TNotification[] = [
  {
    title: "Results are out now for controllers",
    category: "Aliya Category",
    time: "Today 11:15PM",
    url: "#",
  },
  {
    title: "Results are out now for installed now controllers",
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

  const openPopup = (notification: TNotification) =>
    setSelectedNotification(notification);
  const closePopup = () => setSelectedNotification(null);

  return (
    <div className="flex justify-center flex-col md:flex-row gap-3 items-center my-10">
      {NotificationData.map((notification, key) => (
        <div
          key={key}
          onClick={() => openPopup(notification)}
          className={`p-6 gap-4 flex flex-1 items-center w-full bg-opacity-10 hover:bg-opacity-15 rounded-[1.8rem] cursor-pointer ${
            key % 4 === 0
              ? "bg-yellow"
              : key % 4 === 1
              ? "bg-red"
              : key % 4 === 2
              ? "bg-blue"
              : "bg-green"
          }`}
        >
          <Bell
            className={`rounded-full w-8 h-8 ${
              key % 4 === 0
                ? "bg-yellow"
                : key % 4 === 1
                ? "bg-red"
                : key % 4 === 2
                ? "bg-blue"
                : "bg-green"
            }`}
          />
          <div className="flex flex-col gap-2">
            <p className="text-[1.35rem] leading-6 tracking-tighter font-medium ml-1 line-clamp-2">
              {notification.title}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <p
                className={`bg-opacity-10 text-sm rounded-full inline px-3 py-0.5 font-light ${
                  key % 4 === 0
                    ? "bg-yellow"
                    : key % 4 === 1
                    ? "bg-red"
                    : key % 4 === 2
                    ? "bg-blue"
                    : "bg-green"
                }`}
              >
                {notification.category}
              </p>
              <p className="opacity-40 text-xs">{notification.time}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedNotification && (
        <SingleNotification
          isOpen={!!selectedNotification}
          onClose={closePopup}
          data={selectedNotification}
        />
      )}
    </div>
  );
}
