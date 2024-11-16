import Notifications from "@/components/updates/Notifications";
import SmallCard from "@/components/updates/SmallCard";
import WideCard from "@/components/updates/WideCard";
import { Fragment } from "react";

const data = [
  {
    thumbnail: "/gallery/website-launching.jpg",
    title:
      "SIBĀQ 2025 Website Launched by Sayyid Sabiqali Shihab Thangal",
    url: "#",
    published: "today",
  },
  {
    thumbnail: "/gallery/baraf.jpg",
    title:
      "BARAF Program Workshop Successfully Held",
    url: "#",
    published: "today",
  },
  {
    thumbnail: "/gallery/1.jpg",
    title:
      "Debates and Munazara Elimination Rounds Scheduled",
    url: "#",
    published: "1 Day Ago",
  },
  {
    thumbnail: "/gallery/1.jpg",
    title:
      "Y Category Programs to Be Held Cluster-Wise ",
    url: "#",
    published: "2 Days Ago",
  },
  {
    thumbnail: "/gallery/1.jpg",
    title:
      "Elimination Round Dates Announced",
    url: "#",
    published: "4 Days Ago",
  }
];

export default function updates() {
  return (
    <>
      <div className="md:px-28 mt-20 px-8">
        <WideCard />
        <Notifications />
        <div className="flex justify-center flex-wrap flex-1 gap-x-8 gap-y-12">
          {data.map((update, key) => (
            <Fragment key={key}>
              <SmallCard data={update} index={key} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
