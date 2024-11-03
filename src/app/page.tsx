import CountDown from "@/components/CountDown";
import CounterCards from "@/components/CounterCards";
import DHDetails from "@/components/DHDetails";
import FooterAddress from "@/components/FooterAddress";
import FooterContact from "@/components/FooterContact";
import Notifications from "@/components/Notifications";
// import TimeLine from "@/components/TimeLine";
// import LiveSection from "@/components/LiveSection";
import AboutSibaq from "@/components/AboutSibaq";
import HomeArea from "@/components/HomeArea";
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
