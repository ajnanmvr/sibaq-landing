"use client"
import Image from "next/image";
import AOS from "aos"
import { useEffect } from "react";
import Link from "next/link";

const NotificationData = [
    {
        title: "Results are out now for controllers",
        time: "Today 11:15PM",
        image: '/logo-launch.JPG',
        link: "#"
    },
    {
        title: "Results are out now for now controllers",
        time: "Today 11:15PM",
        image: '/logo-launch.JPG',
        link: "#"
    }, {
        title: "Results are out now for controllers",
        time: "Today 11:15PM",
        image: '/logo-launch.JPG',
        link: "#"
    }, {
        title: "Results are out now for controllers",
        time: "Today 11:15PM",
        image: '/logo-launch.JPG',
        link: "#"
    },
]
export default function UpdateCards() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="flex justify-center gap-2 md:gap-4 items-center my-10 flex-wrap px-1">
            {
                NotificationData.map(({ title, time, image, link }, key) => (
                    <Link href={link} key={key} data-aos="fade-in" className={`md:text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 px-3 py-4 gap-3 md:gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center md:justify-center w-full md:w-[19rem] md:min-h-[21rem] border ${key % 4 === 0 ? "bg-red border-red" : key % 4 === 1 ? "bg-yellow border-yellow" : key % 4 === 2 ? "bg-blue border-blue" : key % 4 === 3 && "bg-green border-green"}`}>
                        <div className="w-1/2 h-28">
                            <Image src={image} alt="Bell Icon" className="w-full h-full bg-black rounded-3xl object-cover" width={192} height={108} />
                        </div>
                        <div className="flex flex-col items-baseline md:items-center gap-2">
                            <p className="opacity-40 text-xs">{time}</p>
                            <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0 line-clamp-2">{title}</p>
                            <a href="#" className="bg-blue bg-opacity-10 rounded-full px-3 md:px-4 py-0.5 text-xs font-light cursor-pointer">Read More</a>
                        </div>
                    </Link>
                ))
            }
        </div>

    )
}
