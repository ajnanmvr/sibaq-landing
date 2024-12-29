import Image from "next/image";
import Mobile from "@/assets/static/campaign/mobile.jpg";
import Desktop from "@/assets/static/campaign/desktop.jpg";
function CampaignAd() {
  return (
    <div className="px-10 md:px-28">
      <Image
        className="rounded-[40px] hidden md:block"
        src={Desktop}
        alt="Campaign Advertisement for desktop"
      />
      <Image
        className="rounded-[40px] md:hidden w-full mb-10"
        src={Mobile}
        alt="Campaign Advertisement for desktop"
      />
    </div>
  );
}

export default CampaignAd;
