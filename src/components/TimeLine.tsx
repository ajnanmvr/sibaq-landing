import Image from "next/image";
import ArrowDown from "@/assets/vector/arrow-down.svg"
export default function TimeLine() {
    return (
        <div className="flex justify-center flex-col items-center gap-2">
            <h3 className="font-semibold opacity-50 text-center tracking-tighter text-[4.2rem] inline-block text-transparent bg-clip-text bg-gradient-to-r from-y via-r to-g">Sibaq Timeline</h3>
            <p className="bg-b inline-flex gap-2 justify-center items-center  text-center text-xl bg-opacity-10 rounded-full px-5 py-2 font-light">Venue 1
                <Image src={ArrowDown} alt="an arrow to bottom" className="scale-90" />
            </p>

            <hr className="bg-gradient-to-r from-g via-b to-r h-2 w-full"/>


        </div>
    )
}

