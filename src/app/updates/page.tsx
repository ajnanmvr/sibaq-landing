import Header from "@/components/Header";
import Notifications from "@/components/updates/Notifications";
import SmallCard from "@/components/updates/SmallCard";
import WideCard from "@/components/updates/WideCard";
import { Fragment } from "react";

const data = [
  {
    thumbnail: "",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    thumbnail: "",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    thumbnail: "",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
  {
    thumbnail: "",
    title:
      "Ellavarkkum sugam aan enn karuthunnu, ini sugam illel saralla, ithokke alle oru ith",
    url: "#",
    published: "today",
  },
];

export default function updates() {
  return (
    <>
      <Header
        pageTitle="Updates"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <section className="md:px-28 mt-20 px-8">
        <WideCard />
        <div className="flex justify-between gap-10 mt-20 flex-wrap">
          <div className="flex justify-between flex-wrap flex-1 gap-x-2 gap-y-10">
            {data.map((update, key) => (
              <Fragment key={key}>
                <SmallCard data={update} index={key} />
              </Fragment>
            ))}
          </div>
          <div className="bg-blue/5 rounded-[50px] w-[550px]">
            <Notifications />
          </div>
        </div>
      </section>
    </>
  );
}
