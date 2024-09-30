import CountDown from "@/components/CountDown";
import Notifications from "@/components/Notifications";

export default function Home() {
  return (
    <div className="pt-20">
      <CountDown />
      <Notifications />
    </div>
  )
}