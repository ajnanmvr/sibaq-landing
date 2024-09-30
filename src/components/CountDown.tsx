import Image from "next/image"
import Link from "next/link"
import CalenderIcon from "@/assets/vector/calender.svg";

function CountDown() {
  return (
    <div className="bg-r bg-opacity-20 hover:bg-opacity-25 transition-colors duration-300 mx-20 p-16 rounded-[70px] flex justify-between items-center">
      <div>
        <p className="text-[45px] font-medium mb-1">Commencing In</p>
        <Link href="" className="bg-r rounded-full py-1 pl-1.5 pr-5 text-xl gap-2 text-white items-center pr inline-flex">
          <Image src={CalenderIcon} className="scale-90" alt="Calender Icon" />
          Add to Calender
        </Link>
      </div>

      <div className="flex gap-5 items-center justify-center">
        <div className="text-center">
          <div className="bg-g text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            12
          </div>
          <p className="text-3xl font-medium">Days</p>
        </div>
        <div className="text-center">
          <div className="bg-y text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            15
          </div>
          <p className="text-3xl font-medium">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-b text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            55
          </div>
          <p className="text-3xl font-medium">Minutes</p>
        </div>
        <div className="text-center">
          <div className="bg-r text-[48px] mb-2 rounded-full w-28 h-28 inline-flex items-center justify-center text-white font-bold p-1">
            12
          </div>
          <p className="text-3xl font-medium">Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default CountDown