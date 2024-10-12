import Image from "next/image";
import Map from "@/assets/vector/map.svg"
import Mic from "@/assets/vector/mic.svg"
import Student from "@/assets/vector/student.svg"
import School from "@/assets/vector/school.svg"

export default function CounterCards() {
    return (
        <div className="flex justify-center gap-3 md:gap-4 items-center my-10 flex-wrap">
            <div className="bg-y transition-transform duration-300 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] w-[12.5rem] h-[14rem]">
                <div className="md:mt-16 md:ml-10 mt-10 ml-8">
                    <p className="md:text-[75px] text-[45px] text-y leading-[35px] font-extrabold">10k</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Students</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Student} alt="Icon of a student" className="scale-50 md:scale-90 md:mr-2 -mr-6 -mt-12" />
                </div>
            </div>
            <div className="bg-g transition-transform duration-300 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] w-[12.5rem] h-[14rem]">
                <div className="md:mt-16 md:ml-10 mt-10 ml-8">
                    <p className="md:text-[75px] text-[45px] text-g leading-[35px] font-extrabold">40+</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Institutions</p>
                </div>
                <div className="flex justify-end">
                    <Image src={School} alt="Icon of institution" className="scale-50 md:scale-90 md:-mr-6 md:-mb-4 -mt-12 -mr-14" />
                </div>
            </div>
            <div className="bg-b transition-transform duration-300 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] w-[12.5rem] h-[14rem]">
                <div className="md:mt-16 md:ml-10 mt-10 ml-8">
                    <p className="md:text-[75px] text-[45px] text-b leading-[35px] font-extrabold">100</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">Programs</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Mic} alt="Icon of a microphone" className="scale-50 opacity-70 md:scale-85 md:mr-4 md:-mb-2 -mt-14 -mr-8" />
                </div>
            </div>
            <div className="bg-r transition-transform duration-300 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] w-[12.5rem] h-[14rem]">
                <div className="md:mt-16 md:ml-10 mt-10 ml-8">
                    <p className="md:text-[75px] text-[45px] text-r leading-[35px] font-extrabold">22</p>
                    <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">States</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Map} alt="Icon of map indicating states" className="scale-50 md:scale-85 md:-mr-16 md:-mb-12 -mt-8 -mr-16" />
                </div>
            </div>

        </div>

    )
}
