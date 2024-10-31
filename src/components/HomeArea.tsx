import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import Celebrate from "@/assets/static/celebrate-btn.png";
import Landing from "@/assets/static/sibaq-landing-image.png";
import Mobile from "@/assets/static/landing-mobile.png";

const HomeArea = () => {
  return (
    <div className="w-screen relative h-[100svh] flex flex-col items-center  md:flex-row">
      <div className="md:py-20 py-10 px-10 md:pl-32 flex flex-col justify-center gap-20">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 md:h-20 w-min" />
        <div className="md:text-[4.3rem] text-center md:text-left text-5xl md:leading-[4.3rem] tracking-tighter">
          <h1 className="text-gradient font-medium">SIBĀQ 25</h1>
          <p className="font-light mt-0.5 md:mt-2">
            DHIU National <br />
            Arts Fest
          </p>
        </div>
        <Image
          src={Celebrate}
          alt="Logo Sibaq"
          quality={100}
          className="h-16 w-min hidden md:block"
        />
      </div>
      <Image
        src={Mobile}
        alt="Landing Sibaq"
        quality={100}
        className="w-screen md:hidden absolute bottom-0"
      />
      <div className="flex-1 relative h-screen py-3 md:w-[500px] overflow-hidden">
        <Image
          src={Landing}
          alt="Logo Sibaq"
          quality={100}
          className=" object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default HomeArea;
