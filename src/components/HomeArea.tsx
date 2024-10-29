import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import Text from "@/assets/static/festival-of-cultures-text.png";
import Celebrate from "@/assets/static/celebrate-btn.png";
import Header from "./Header";

const HomeArea = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center flex-col items-center gap-16 flex-1">
        <Image src={Logo} alt="Logo Sibaq" className="h-24 w-min" />
        <Image
          src={Text}
          alt="Logo Sibaq"
          height={240}
          className="h-28 w-min"
        />
        <Image src={Celebrate} alt="Logo Sibaq" className="h-16 w-min" />
      </div>
    </div>
  );
};

export default HomeArea;
