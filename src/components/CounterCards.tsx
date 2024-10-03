import Image from "next/image";
import Map from "@/assets/vector/map.svg"
import Mic from "@/assets/vector/mic.svg"
import Student from "@/assets/vector/student.svg"
import School from "@/assets/vector/school.svg"

export default function CounterCards() {
    return (

        <div className="flex justify-center gap-4 items-center my-10">
            <div className="bg-y transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[70px] justify-between w-[19rem] h-[23rem]">
                <div className="mt-16 ml-10">
                    <p className="text-[75px] text-y leading-[35px] font-extrabold">10k</p>
                    <p className="text-4xl tracking-tighter font-light mt-2">Students</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Student} alt="Icon of a student" className="scale-90 mr-2" />
                </div>
            </div>
            <div className="bg-g transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[70px] justify-between w-[19rem] h-[23rem]">
                <div className="mt-16 ml-10">
                    <p className="text-[75px] text-g leading-[35px] font-extrabold">40+</p>
                    <p className="text-4xl tracking-tighter font-light mt-2">Institutions</p>
                </div>
                <div className="flex justify-end">
                    <Image src={School} alt="Icon of institution" className="scale-90 -mr-6 -mb-4" />
                </div>
            </div>
            <div className="bg-b transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[70px] justify-between w-[19rem] h-[23rem]">
                <div className="mt-16 ml-10">
                    <p className="text-[75px] text-b leading-[35px] font-extrabold">100</p>
                    <p className="text-4xl tracking-tighter font-light mt-2">Programs</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Mic} alt="Icon of a microphone" className="scale-[85%] mr-4 -mb-2" />
                </div>
            </div>
            <div className="bg-r transition-all duration-300 hover:bg-opacity-20 hover:scale-[102%] gap-4 bg-opacity-10 flex flex-col rounded-[70px] justify-between w-[19rem] h-[23rem]">
                <div className="mt-16 ml-10">
                    <p className="text-[75px] text-r leading-[35px] font-extrabold">22</p>
                    <p className="text-4xl tracking-tighter font-light mt-2">States</p>
                </div>
                <div className="flex justify-end">
                    <Image src={Map} alt="Icon of map indicating states" className="scale-[85%] -mr-16 -mb-12" />
                </div>
            </div>

        </div>

    )
}
