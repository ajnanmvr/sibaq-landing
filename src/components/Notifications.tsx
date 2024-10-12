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
        <div className="flex justify-center gap-4 items-center m-10 flex-wrap">
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 p-10 gap-4 rounded-3xl md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col items-center gap-4">
                    <p className="md:text-3xl text-xl leading-6 md:leading-7 tracking-tighter font-medium">Results are out now for controllers</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 p-10 gap-4 rounded-3xl md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col items-center gap-4">
                    <p className="md:text-3xl text-xl leading-6 md:leading-7 tracking-tighter font-medium">Results are out now for controllers</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 p-10 gap-4 rounded-3xl md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col items-center gap-4">
                    <p className="md:text-3xl text-xl leading-6 md:leading-7 tracking-tighter font-medium">Results are out now for controllers</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 p-10 gap-4 rounded-3xl md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col items-center gap-4">
                    <p className="md:text-3xl text-xl leading-6 md:leading-7 tracking-tighter font-medium">Results are out now for controllers</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-4 py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
