import Image from "next/image";
import RoundArrow from "@/assets/vector/RoundArrow";
import Link from "next/link";
type Data = {
  thumbnail: string;
  title: string;
  url: string;
  published: string;
};
export default function SmallCard({
  data,
  index,
}: {
  data: Data;
  index: number;
}) {
  return (
    <div className="flex gap-2 flex-col md:w-80 text-center justify-center items-center">
      <Image
        src="/modal/1.jpg"
        width={300}
        height={100}
        alt="1"
        className="rounded-[44px]"
      />
      <div className="text-sm opacity-50 mt-1">Updated {data.published}</div>
      <h2
        className={`${
          index % 4 === 0
            ? "text-yellow"
            : index % 4 === 1
            ? "text-red"
            : index % 4 === 2
            ? "text-blue"
            : "text-green"
        } font-[450] text-[1.6rem] leading-7 mx-5 line-clamp-3`}
      >
        {data.title}
      </h2>
      <Link
        href={data.url}
        className={`px-3 py-1 flex gap-1.5 items-center justify-center font-[470] border-[0.5px] border-black rounded-full transition-colors duration-300 ${
          index % 4 === 0
            ? "hover:bg-yellow"
            : index % 4 === 1
            ? "hover:bg-red"
            : index % 4 === 2
            ? "hover:bg-blue"
            : "hover:bg-green"
        } hover:bg-opacity-5 mt-2`}
      >
        View More
        <RoundArrow className="rotate-45 w-5 h-5" color="#09abb1" />
      </Link>
    </div>
  );
}
