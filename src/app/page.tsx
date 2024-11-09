import CountDown from "@/components/home/CountDown";
import CounterCards from "@/components/home/CounterCards";
import DHDetails from "@/components/home/DHDetails";
import FooterContact from "@/components/home/Contact";
import Notifications from "@/components/home/Notifications";
import AboutSibaq from "@/components/home/AboutSibaq";
import HomeArea from "@/components/home/HomeArea";
// import TimeLine from "@/components/TimeLine";
// import LiveSection from "@/components/LiveSection";
// import EventTile from "@/components/EventTile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap">
      <HomeArea />
      <CountDown />
      <Notifications />
      <AboutSibaq />
      <CounterCards />
      <DHDetails />
      {/* <EventTile/> */}
      {/* <TimeLine /> */}
      {/* <LiveSection /> */}
      <FooterContact />
    </div>
  );
}
