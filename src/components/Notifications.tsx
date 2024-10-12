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
        <div className="flex justify-center gap-2 md:gap-4 items-center m-10 flex-wrap">
            <div data-aos="fade-left" className="bg-b md:text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 px-8 py-6 gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col md:items-center gap-2 md:gap-4">
                    <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0">Results are out now for controllers</p>
                    <div className="flex md:flex-col items-center md:justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-3 md:px-4 py-0.5 md:py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b md:text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 px-8 py-6 gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col md:items-center gap-2 md:gap-4">
                    <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0">Results are out now for i now controllers</p>
                    <div className="flex md:flex-col items-center md:justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-3 md:px-4 py-0.5 md:py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b md:text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 px-8 py-6 gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col md:items-center gap-2 md:gap-4">
                    <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0">Results are out now for controllers</p>
                    <div className="flex md:flex-col items-center md:justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-3 md:px-4 py-0.5 md:py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="bg-b md:text-center transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] bg-opacity-10 px-8 py-6 gap-4 rounded-[1.8rem] md:rounded-[70px] flex md:flex-col items-center justify-center w-full md:w-[19rem] md:min-h-[21rem]">
                <Image src= {BellIcon} alt="Bell Icon" className="scale-75 md:scale-90" />
                <div className="flex flex-col md:items-center gap-2 md:gap-4">
                    <p className="md:text-3xl text-[1.35rem] leading-6 md:leading-7 tracking-tighter font-medium ml-1 md:ml-0">Results are out now for controllers</p>
                    <div className="flex md:flex-col items-center md:justify-center gap-2">
                        <p className="bg-b bg-opacity-10 rounded-full inline px-3 md:px-4 py-0.5 md:py-1 font-light">Aliya Category</p>
                        <p className="opacity-40 text-xs">Today 11:15PM</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
