import SmallCard from "@/components/updates/SmallCard";
import Image from "next/image";
import { Fragment } from "react";

const data = [
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "/1",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    id: "",
    thumbnail: "/gallery/1.jpg",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
];
export default function SingleNews() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-grow text-center p-28 justify-center items-center max-w-[65rem] flex flex-col gap-3 ">
        <Image
          src={"/gallery/1.jpg"}
          width={1000}
          height={1000}
          alt="noth"
          className="rounded-[3rem]"
        />
        <h2 className="text-red font-[470] tracking-tighter text-3xl md:tracking-[-0.18rem] md:text-[2.7rem] md:leading-[3.1rem]">
          Darul Huda SIBAQ 25 Logo Launched by sadiqal shib kdekl
        </h2>
        <p className="opacity-50">Updated Today</p>
        <p className="text-xl leading-6">
          Anwar is good boy and ajnan is a bad guy and there are somanay bad
          gooys which they all are ralalted with ajanan. some time when we see
          mr ajnan we will seem he is like a mad guy in reality he is ultra mad
          guy when he is standing alone and walking alone. gooys which they all
          are ralalted with ajanan. some time when we see mr ajnan we will seem
          he is like a mad guy in reality he is ultra mad guy when he is
          standing alone and walking alone. Anwar is good boy and ajnan is a bad
          guy and there are somanay bad gooys which they all are ralalted with
          ajanan. some time when we see mr ajnan we will seem he is like a mad
          guy in reality he is ultra mad guy when he is standing alone and
          walking alone. gooys which they all are ralalted with ajanan. some
          time when we see mr ajnan we will seem he is like a mad guy in reality
          he is ultra mad guy when he is standing alone and walking alone.
        </p>
      </div>
      <div className="flex justify-center flex-wrap flex-1 gap-x-8 gap-y-12">
        {data.slice(4).map((update, key) => (
          <Fragment key={key}>
            <SmallCard data={update} index={key} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
