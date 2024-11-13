import Image from "next/image";

export default function SingleNews() {
  return (
    <div className="p-28  flex justify-center">
      <div className="flex-grow text-center justify-center items-center max-w-[65rem] flex flex-col gap-3 ">
        <h2 className="text-red font-[470] tracking-tighter text-3xl md:tracking-[-0.18rem] md:text-[2.7rem] md:leading-[3.1rem]">
          Darul Huda SIBAQ 25 Logo Launched by sadiqal shib kdekl
        </h2>
        <p className="opacity-50">Updated Today</p>

        <Image
          src={"/launch.jpg"}
          width={1000}
          height={1000}
          alt="noth"
          className="rounded-[3rem]"
        />
        <p className="text-xl leading-6 line-clamp-5">
          Anwar is good boy and ajnan is a bad guy and there are somanay bad
          gooys which they all are ralalted with ajanan. some time when we see
          mr ajnan we will seem he is like a mad guy in reality he is ultra mad
          guy when he is standing alone and walking alone. gooys which they all
          are ralalted with ajanan. some time when we see mr ajnan we will seem
          he is like a mad guy in reality he is ultra mad guy when he is
          standing alone and walking alone.
        </p>
      </div>
    </div>
  );
}
