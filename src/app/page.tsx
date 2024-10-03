import CountDown from "@/components/CountDown";
import CounterCards from "@/components/CounterCards";
import DHDetails from "@/components/DHDetails";
import Notifications from "@/components/Notifications";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen"></div>
      <CountDown />
      <Notifications />
      <CounterCards />
      <DHDetails />

      <div className="h-screen">

      </div>
    </div>
  )
}