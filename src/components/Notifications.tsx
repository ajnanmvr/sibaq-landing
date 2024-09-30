import BellIcon from "@/assets/vector/bell.svg";
import Arrow from "@/assets/vector/arrow.svg";
import Image from "next/image";

export default function Notifications() {
    return (
        <div className='bg-b mt-5 bg-opacity-10 hover:bg-opacity-15 transition-colors duration-300 flex-col mx-20 px-16 pb-12 rounded-[70px] flex justify-between items-center'>
            <h1 className="bg-b text-white text-[38px] py-2.5 px-20 rounded-b-[50px]">Notifications</h1>


            <div className="flex justify-center gap-4 items-center my-10">
                <div className="bg-b text-center gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-72 h-80">
                    <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                    <p className="text-[37px] leading-[35px] font-medium">Results are out now</p>
                    <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-3">Aliya Category</p>
                    <p className="opacity-60 text-sm">Today 11:15PM</p>
                </div>
                <div className="bg-b text-center gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-72 h-80">
                    <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                    <p className="text-[37px] leading-[35px] font-medium">Results are out now</p>
                    <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-3">Aliya Category</p>
                    <p className="opacity-60 text-sm">Today 11:15PM</p>
                </div>
                <div className="bg-b text-center gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-72 h-80">
                    <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                    <p className="text-[37px] leading-[35px] font-medium">Results are out now</p>
                    <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-3">Aliya Category</p>
                    <p className="opacity-60 text-sm">Today 11:15PM</p>
                </div>
                <div className="bg-b text-center gap-4 bg-opacity-10 p-10 rounded-[70px] flex flex-col items-center justify-center w-72 h-80">
                    <Image src={BellIcon} alt="Bell Icon" className="scale-90" />
                    <p className="text-[37px] leading-[35px] font-medium">Results are out now</p>
                    <p className="bg-b bg-opacity-10 text-lg rounded-full inline px-3">Aliya Category</p>
                    <p className="opacity-60 text-sm">Today 11:15PM</p>
                </div>
            </div>

            <button className="rounded-full items-center px-5 py-2 transition-colors hover:bg-opacity-30 duration-300 group text-xl inline-flex gap-2 text-b bg-b bg-opacity-20">Show More

                <Image src={Arrow} alt="Arrow Icon" className="scale-90 transition-transform duration-300 group-hover:translate-x-1" />

            </button>
        </div>
    )
}
