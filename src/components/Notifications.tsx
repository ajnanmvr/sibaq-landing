"use client"
import BellIcon from "@/assets/vector/bell.svg";
import Image from "next/image";
import AOS from "aos"
import { useEffect } from "react";
export default function Notifications() {

    useEffect(() => {
    AOS.init()
    }, [])

    return (
        <div className="flex justify-center gap-4 items-center my-10 flex-wrap">
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-[19rem] h-[21rem]">
                <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                <p className="text-[37px] leading-[35px] tracking-tighter font-medium">Results are out now</p>
                <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                <p className="opacity-40 text-xs">Today 11:15PM</p>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-[19rem] h-[21rem]">
                <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                <p className="text-[37px] leading-[35px] tracking-tighter font-medium">Results are out now</p>
                <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                <p className="opacity-40 text-xs">Today 11:15PM</p>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-[19rem] h-[21rem]">
                <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                <p className="text-[37px] leading-[35px] tracking-tighter font-medium">Results are out now</p>
                <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                <p className="opacity-40 text-xs">Today 11:15PM</p>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-[19rem] h-[21rem]">
                <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                <p className="text-[37px] leading-[35px] tracking-tighter font-medium">Results are out now</p>
                <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                <p className="opacity-40 text-xs">Today 11:15PM</p>
            </div>
        </div>

    )
}
