import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import Celebrate from "@/assets/static/celebrate-btn.png";
import Landing from "@/assets/static/sibaq-landing-image.png";

const HomeArea = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="py-20 pl-32 flex flex-col justify-center gap-20">
        <Image src={Logo} alt="Logo Sibaq" className="h-20 w-min" />
        <div className="text-[4.3rem] leading-[4.3rem] tracking-tighter">
        <h1 className="text-gradient font-medium">SIBĀQ 25</h1>
        <p className="font-light mt-2">
          DHIU National <br />
          Arts Fest
        </p></div>
        <Image
          src={Celebrate}
          alt="Logo Sibaq"
          quality={100}
          className="h-16 w-min"
        />
      </div>
      <div className="flex-1 relative h-screen py-3 w-[500px] overflow-hidden">
        <Image
          src={Landing}
          alt="Logo Sibaq"
          quality={100}
          className="w-max h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HomeArea;
