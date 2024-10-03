import CountDown from "@/components/CountDown";
import CounterCards from "@/components/CounterCards";
import DHDetails from "@/components/DHDetails";
import Notifications from "@/components/Notifications";
import TimeLine from "@/components/TimeLine";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen"></div>
      <CountDown />
      <Notifications />
      <CounterCards />
      <DHDetails />
      <TimeLine />
      <div className="h-screen">

      </div>
    </div>
  )
}