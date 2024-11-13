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
