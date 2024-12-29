import { eliminationHosts } from "@/libs/eliminationHosts";
import Image from "next/image";
import Link from "next/link";
import NavigateIcon from "@/assets/vector/navigate.svg";
import autoColor from "@/utils/autoColor";
export default function HostDetails() {
  return (
    <section className="w-full sm:p-20 flex flex-col items-center justify-center gap-16">
      <h2 className="text-gradient sm:mb-8 text-center bg-four-color font-medium text-4xl md:text-5xl tracking-tighter">
        Elimination Hosts
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {eliminationHosts.map((host, index) => (
          <div
            key={index}
            className={`bg-gradient-to-t ${autoColor(index, [
              "from-yellow/10 hover:via-yellow/5",
              "from-red/10 hover:via-red/5",
              "from-green/10 hover:via-green/5",
              "from-blue/10 hover:via-blue/5",
              "from-yellow/10 hover:via-yellow/5",
              "from-blue/10 hover:via-blue/5",
            ])} via-white transition-all duration-300 rounded-b-[3rem]`}
          >
            <Image
              height={300}
              width={350}
              src={host.image}
              alt={host.name + " image"}
              className="rounded-t-[3rem] h-56 object-cover w-80 sm:w-[22.5rem]"
            />
            <div className="p-10 w-80 sm:w-[22.5rem] text-center flex justify-center gap-2 items-center flex-col">
              <h3 className="uppercase tracking-widest text-xs">
                {host.group} - {host.section}
              </h3>
              <h4
                className={`${autoColor(index, [
                  "text-yellow",
                  "text-red",
                  "text-green",
                  "text-blue",
                  "text-yellow",
                  "text-blue",
                ])} font-medium text-3xl tracking-tighter`}
              >
                {host.name}
              </h4>{" "}
              <p className="text-lg max-w-48 mb-2 leading-6">
                for {host.category.join(", ")} categories
              </p>
              <a
                href={host.location}
                target="_blank"
                className={` ${autoColor(index, [
                  "bg-yellow hover:shadow-yellow/20",
                  "bg-red hover:shadow-red/20",
                  "bg-green hover:shadow-green/20",
                  "bg-blue hover:shadow-blue/20",
                  "bg-yellow hover:shadow-yellow/20",
                  "bg-blue hover:shadow-blue/20",
                ])} transition-colors duration-300 hover:shadow-menu-active pl-3 pr-4 py-1.5 text-white inline-flex items-center justify-center gap-1.5 rounded-full`}
              >
                <Image
                  src={NavigateIcon}
                  alt="Navigate Icon"
                  className="w-5 h-5"
                />
                Navigate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
