import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import React from "react";
const data = ["D", "", "", "", "", ""];
export default function updates() {
  return (
    <section className="pt-10 md:px-28 px-8">
      <div className="flex flex-col-reverse lg:flex-row min-h-[80vh] lg:justify-center gap-8 items-center">
        <div className="flex-grow flex flex-col gap-3 items-start">
          <p className="text-sm">Updated Today</p>
          <h1 className="text-blue tracking-tighter text-4xl font-medium">
            SheFest 2023 Mahdiyya Fest Finale, Zahra Womens Collage Wins over
            50+ Collages
          </h1>
          <p className="max-w-2xl opacity-60">
            Anwar is good boy and ajnan is a bad guy and there are somanay bad
            gooys which they all are ralalted with ajanan. some time when we see
            mr ajnan we will seem he is like a mad guy in reality he is ultra
            mad guy when he is standing alone and walking alone.
          </p>
          <button className="bg-blue text-white px-4 py-1.5 rounded-3xl border border-blue hover:bg-transparent transition hover:text-blue">
            Next Wriery
          </button>
        </div>
        <Image
          src="/4.webp"
          width={600}
          height={600}
          alt="CPET Updates"
          className="rounded-[50px] object-cover h-80"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.map((data, key) => (
          <React.Fragment key={key}>
            <NewsCard localKey={key} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
