import Image from "next/image";

export default function NewsCard({ localKey }: { localKey: number }) {
  return (
    <div className={`max-w-2xl hover:bg-opacity-5 border group border-slate-200 transition-colors duration-300 overflow-hidden mx-4 sm:max-w-sm sm:mx-auto rounded-[50px] ${
        localKey % 4 === 0
        ? "hover:bg-yellow"
        : localKey % 4 === 1
        ? "hover:bg-red"
        : localKey % 4 === 2
        ? "hover:bg-blue"
        : "hover:bg-green"
    }`}>
      <div className="h-64 w-full relative">
        <Image
          src="/4.webp"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-[50px] rounded-bl-none"
        />
      </div>
      <div className="flex flex-col gap-1 items-start justify-evenly p-6 ">
        <p className="text-xs ">Updated Today</p>
        <p
          className={`text-2xl font-medium leading-7 tracking-tighter line-clamp-4 ${
            localKey % 4 === 0
              ? "text-yellow"
              : localKey % 4 === 1
              ? "text-red"
              : localKey % 4 === 2
              ? "text-blue"
              : "text-green"
          }`}
        >
          Study Center Registation Started, A lot of Request Came to the Office
        </p>
        <p className="mb-3 opacity-60 line-clamp-3 leading-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          laudantium necessitatibus pariatur sed ullam quia omnis atque enim
          expedita eveniet numquam, excepturi nisi nostrum similique. Fugiat
          officiis molestias aspernatur consectetur.
        </p>
      </div>
    </div>
  );
}
