import CountDown from "@/components/CountDown";
import DHDetails from "@/components/DHDetails";
import FooterAddress from "@/components/FooterAddress";
import FooterContact from "@/components/FooterContact";
import Notifications from "@/components/Notifications";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen"></div>
      <CountDown />
      <Notifications />
      <DHDetails />
      <div>
        <FooterContact />
        <FooterAddress />
      </div>
    </div>
  );
}
