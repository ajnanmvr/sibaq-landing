import RoundArrow from "@/assets/vector/RoundArrow";
import Image from "next/image";

export default function WideCard() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-center gap-8 items-center rounded-[45px]">
      <div className="flex-grow flex flex-col gap-3 items-start">
        <p className="opacity-50">Updated Today</p>
        <h2 className="text-red font-[470] tracking-[-0.18rem] text-[2.7rem] leading-[3.1rem] line-clamp-2 pr-20 ">
          Darul Huda SIBAQ 25 Logo Launched by sadiqal shib kdekl
        </h2>
        <p className="max-w-2xl text-xl leading-6 line-clamp-5">
          Anwar is good boy and ajnan is a bad guy and there are somanay bad
          gooys which they all are ralalted with ajanan. some time when we see
          mr ajnan we will seem he is like a mad guy in reality he is ultra mad
          guy when he is standing alone and walking alone. gooys which they all
          are ralalted with ajanan. some time when we see mr ajnan we will seem
          he is like a mad guy in reality he is ultra mad guy when he is
          standing alone and walking alone.
        </p>
        <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
          View More
          <RoundArrow className="rotate-45 w-6 h-6" />
        </button>
      </div>
      <Image
        src="/logo-launch.JPG"
        width={550}
        height={700}
        alt="Updates"
        className="lg:h-full rounded-[80px]"
      />
    </div>
  );
}
