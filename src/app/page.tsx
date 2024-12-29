import CountDown from "@/components/home/CountDown";
import CounterCards from "@/components/home/CounterCards";
import DHDetails from "@/components/home/DHDetails";
import FooterContact from "@/components/home/Contact";
import Notifications from "@/components/home/Notifications";
import AboutSibaq from "@/components/home/AboutSibaq";
import HomeArea from "@/components/home/HeroSection";
// import TimeLine from "@/components/home/TimeLine";
import PosterCampaign from "@/components/home/PosterCampaign";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-wrap">
      <HomeArea />
      <CountDown />
      <PosterCampaign/>
      <Notifications />
      <AboutSibaq />
      <CounterCards />
      <DHDetails />
      {/* <TimeLine /> */}
      {/* <HostDetails /> */}
      <FooterContact />
    </main>
  );
}
