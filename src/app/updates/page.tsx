import Header from "@/components/Header";
import SmallCard from "@/components/updates/SmallCard";
import WideCard from "@/components/updates/WideCard";
import Image from "next/image";
export default function updates() {
  return (
    <>
      <Header
        pageTitle="Updates"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <section className="mt-20 md:px-28 px-10">
        <WideCard />
        <div className="flex justify-between gap-10 mt-20">
          <div className="flex justify-between flex-wrap flex-1 gap-x-2 gap-y-10">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
          <div className="bg-red rounded-[50px] w-[550px]"></div>
        </div>
      </section>
    </>
  );
}
