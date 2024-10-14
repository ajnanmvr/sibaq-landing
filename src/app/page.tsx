import CountDown from "@/components/CountDown";
import CounterCards from "@/components/CounterCards";
import DHDetails from "@/components/DHDetails";
import FooterAddress from "@/components/FooterAddress";
import FooterContact from "@/components/FooterContact";
import Notifications from "@/components/Notifications";
// import TimeLine from "@/components/TimeLine";
// import LiveSection from "@/components/LiveSection";
import AboutSibaq from "@/components/AboutSibaq";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap">
      <div className="h-screen"></div>
      <CountDown />
      <Notifications />
      <AboutSibaq />
      <CounterCards />
      <DHDetails />
      {/* <TimeLine /> */}
      {/* <LiveSection /> */}
      <FooterContact />
      <FooterAddress />
    </div>
  );
}

