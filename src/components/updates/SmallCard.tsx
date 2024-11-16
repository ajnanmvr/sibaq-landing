import Image from "next/image";
import RoundArrow from "@/components/RoundArrow";
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
    <Link
      href={data.url}
      className={`flex group gap-2 hover:bg-gradient-to-t from-transparent ${
        index % 5 === 0
          ? "via-yellow/10"
          : index % 5 === 1
          ? "via-red/10"
          : index % 5 === 2
          ? "via-blue/10"
          : index % 5 === 3
          ? "via-green/10"
          : "via-blue/10"
      } flex-col md:w-72 text-center justify-center items-center`}
    >
      <Image
        src={data.thumbnail}
        width={300}
        height={100}
        alt="1"
        className="rounded-[44px]"
      />
      <div className="text-sm opacity-50 mt-1">Updated {data.published}</div>
      <h2
        className={` ${
          index % 5 === 0
            ? "text-yellow"
            : index % 5 === 1
            ? "text-red"
            : index % 5 === 2
            ? "text-blue"
            : index % 5 === 3
            ? "text-green"
            : "text-blue"
        } font-[450] text-[1.6rem] leading-7 mx-5 line-clamp-3`}
      >
        {data.title}
      </h2>
      <div
        className={`px-3 py-1 flex gap-1.5 items-center justify-center font-[470] border-[0.5px] border-black rounded-full transition-colors duration-300 ${
          index % 5 === 0
            ? "group-hover:bg-yellow"
            : index % 5 === 1
            ? "group-hover:bg-red"
            : index % 5 === 2
            ? "group-hover:bg-blue"
            : index % 5 === 3
            ? "group-hover:bg-green"
            : "group-hover:bg-blue"
        } group-hover:bg-opacity-5 mt-2`}
      >
        {" "}
        View More
        <RoundArrow
          className={`w-5 h-5 ${
            index % 5 === 0
              ? "from-yellow/80 to-yellow/5"
              : index % 5 === 1
              ? "from-red/80 to-red/5"
              : index % 5 === 2
              ? "from-blue/80 to-blue/5"
              : index % 5 === 3
              ? "from-green/80 to-green/5"
              : "from-blue/80 to-blue/5"
          }`}
        />
      </div>
    </Link>
  );
}
