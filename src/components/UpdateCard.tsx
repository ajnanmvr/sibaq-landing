import Image from "next/image";

export default function UpdateCard({ localKey }: { localKey: number }) {
    return (
        <div className={`max-w-2xl flex bg-opacity-10 border group transition-colors duration-300 overflow-hidden md:mx-4 p-3 sm:max-w-sm sm:mx-auto rounded-lg ${localKey % 4 === 0
            ? "bg-yellow border-yellow"
            : localKey % 4 === 1
                ? "bg-red border-red"
                : localKey % 4 === 2
                    ? "bg-blue border-blue"
                    : "bg-green border-green"
            }`}>
            <div className="h-[90px] w-full relative">
                <Image
                    src="/4.webp"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col items-start justify-evenly p-3 pb-0">
                <p className="text-[10px] text-gray-500">Updated Today</p>
                <p
                    className="text-xs font-medium leading-3 tracking-tighter line-clamp-2 text-black">
                    SIBAQ 2025 Website Launching Launching Launching
                </p>
                <p className="text-[8px] opacity-60 line-clamp-2 text-gray-600 leading-none">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                    laudantium necessitatibus pariatur sed ullam quia omnis atque enim
                    expedita eveniet numquam, excepturi nisi nostrum similique. Fugiat
                    officiis molestias aspernatur consectetur.
                </p>
                <a href="#" className="text-[10px] text-gray-400">Read More</a>
            </div>
        </div>
    );
}
