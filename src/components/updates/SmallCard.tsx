import Image from "next/image";
import RoundArrow from "@/assets/vector/RoundArrow";

export default function SmallCard() {
  return (
    <div className="flex gap-2 flex-col w-80 text-center justify-center items-center">
      <Image
        src="/modal/1.jpg"
        width={300}
        height={100}
        alt="1"
        className="rounded-[44px]"
      />
      <div className="text-sm opacity-50 mt-1">Updated Today</div>
      <h2 className="text-green font-[450] text-[1.6rem] leading-8 mx-5 line-clamp-3">
        Fayiz PV Pooped in his pants, no water to wash his clothes today
      </h2>
      <button className="px-3 py-1 flex gap-1.5 items-center justify-center font-[470] border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-green hover:bg-opacity-5 mt-2">
        View More
        <RoundArrow className="rotate-45 w-5 h-5" color="#09abb1" />
      </button>
    </div>
  );
}
