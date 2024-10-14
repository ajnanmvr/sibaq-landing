import Image from "next/image";
import Map from "@/assets/vector/map.svg"
import Mic from "@/assets/vector/mic.svg"
import Student from "@/assets/vector/student.svg"
import School from "@/assets/vector/school.svg"

export default function CounterCards() {
    return (
        <div className="flex justify-center gap-3 md:gap-4 items-center my-10 flex-wrap w-full">
            <div className="bg-y p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
                <div className="md:mt-16 md:ml-10 mt-6 ml-4">
                    <p className="md:text-[75px] text-[45px] text-y leading-[35px] font-extrabold">10k</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Students</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Student} alt="Icon of a student" className="h-20 md:h-[10.5rem] w-min opacity-10" />
                </div>
            </div>
            <div className="bg-g p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
                <div className="md:mt-16 md:ml-10 mt-6 ml-4">
                    <p className="md:text-[75px] text-[45px] text-g leading-[35px] font-extrabold">40+</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Institutions</p>
                </div>
                <div className="flex justify-end">
                    <Image src={School} alt="Icon of institution" className="h-20 md:h-[10.5rem] w-min opacity-10" />
                </div>
            </div>
            <div className="bg-b p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
                <div className="md:mt-16 md:ml-10 mt-6 ml-4">
                    <p className="md:text-[75px] text-[45px] text-b leading-[35px] font-extrabold">100</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Programs</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Mic} alt="Icon of a microphone" className="h-20 md:h-[10.5rem] w-min opacity-10" />
                </div>
            </div>
            <div className="bg-r p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
                <div className="md:mt-16 md:ml-10 mt-6 ml-4">
                    <p className="md:text-[75px] text-[45px] text-r leading-[35px] font-extrabold">22</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">States</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Map} alt="Icon of map indicating states" className="h-20 md:h-[9.5rem] w-min opacity-10" /></div>
            </div>

        </div>

    )
}
