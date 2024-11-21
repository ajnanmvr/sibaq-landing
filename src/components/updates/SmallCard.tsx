import Image from "next/image";
import RoundArrow from "@/components/RoundArrow";
import Link from "next/link";
import autoColor from "@/utils/autoColor";
type Data = {
  thumbnail: string;
  title: string;
  id: string;
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
      href={data.id}
      className={`flex group gap-2 hover:bg-gradient-to-t from-transparent ${autoColor(
        index,
        [
          "via-yellow/10",
          "via-red/10",
          "via-green/10",
          "via-blue/10",
          "via-green/10",
        ]
      )} flex-col md:w-72 text-center justify-center items-center`}
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
        className={` ${autoColor(index, [
          "text-yellow",
          "text-red",
          "text-green",
          "text-blue",
          "text-green",
        ])} font-[450] text-[1.6rem] leading-7 mx-5 line-clamp-3`}
      >
        {data.title}
      </h2>
      <div
        className={`px-3 py-1 flex gap-1.5 items-center justify-center font-[470] border-[0.5px] border-black rounded-full transition-colors duration-300 ${autoColor(
          index,
          [
            "group-hover:bg-yellow",
            "group-hover:bg-red",
            "group-hover:bg-green",
            "group-hover:bg-blue",
            "group-hover:bg-green",
          ]
        )} group-hover:bg-opacity-5 mt-2`}
      >
        View More
        <RoundArrow
          className={`w-5 h-5 ${autoColor(index, [
            "from-yellow/80 to-yellow/10",
            "from-red/80 to-red/10",
            "from-green/80 to-green/10",
            "from-blue/80 to-blue/10",
            "from-green/80 to-green/10",
          ])}`}
        />
      </div>
    </Link>
  );
}
