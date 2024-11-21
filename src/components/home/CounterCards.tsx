import Image from "next/image";
import Map from "@/assets/vector/counter-cards/map.svg";
import Mic from "@/assets/vector/counter-cards/mic.svg";
import Student from "@/assets/vector/counter-cards/student.svg";
import School from "@/assets/vector/counter-cards/school.svg";

export default function CounterCards() {
  return (
    <div className="flex justify-center gap-3 md:gap-4 items-center my-10 flex-wrap w-full">
      <div className="bg-yellow p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
        <div className="md:mt-16 md:ml-10 mt-6 ml-4">
          <p className="md:text-[75px] text-[45px] text-yellow leading-[35px] font-extrabold">
            4k
          </p>
          <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">
            Candidates
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={Student}
            alt="Icon of a student"
            className="h-20 md:h-[10.5rem] w-min opacity-10"
          />
        </div>
      </div>
      <div className="bg-green p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
        <div className="md:mt-16 md:ml-10 mt-6 ml-4">
          <p className="md:text-[75px] text-[45px] text-green leading-[35px] font-extrabold">
            35+
          </p>
          <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">
            Institutions
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={School}
            alt="Icon of institution"
            className="h-20 md:h-[10.5rem] w-min opacity-10"
          />
        </div>
      </div>
      <div className="bg-blue p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
        <div className="md:mt-16 md:ml-10 mt-6 ml-4">
          <p className="md:text-[75px] text-[45px] text-blue leading-[35px] font-extrabold">
            407
          </p>
          <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">
            Programs
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={Mic}
            alt="Icon of a microphone"
            className="h-20 md:h-[10.5rem] w-min opacity-10"
          />
        </div>
      </div>
      <div className="bg-red p-2 w-[9.5rem] transition-transform duration-300 gap-4 bg-opacity-10 flex flex-col rounded-[40px] md:rounded-[70px] justify-between md:w-[19rem] md:h-[23rem] h-[13rem]">
        <div className="md:mt-16 md:ml-10 mt-6 ml-4">
          <p className="md:text-[75px] text-[45px] text-red leading-[35px] font-extrabold">
            20+
          </p>
          <p className="md:text-4xl text-xl mt-0.5 tracking-tighter font-light md:mt-2">
            States
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={Map}
            alt="Icon of map indicating states"
            className="h-20 md:h-[9.5rem] w-min opacity-10"
          />
        </div>
      </div>
    </div>
  );
}
