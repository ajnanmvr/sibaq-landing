import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import LeftSide from "@/assets/vector/landing/leftside-pattern.svg";
import RightSide from "@/assets/vector/landing/rightside-pattern.svg";
// import Sea from "@/assets/vector/landing/sea.svg";
import localFont from "next/font/local";
import Celebrate from "./Celebrate";

const nippo = localFont({ src: "../../fonts/nippo.ttf" });

const HeroSection = () => {
  return (
    <div className="home w-full relative min-h-[100svh] flex items-center justify-center">
      <div className="md:py-20 bg-white/70 backdrop-blur-md rounded-[3rem] p-10 flex flex-col justify-center items-center gap-8">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 md:h-20 w-min" />
        <div className="md:text-[4.3rem] text-center text-[2.5rem] leading-[2.5rem] sm:text-5xl md:leading-[4.3rem] tracking-tighter">
          <h1
            className={`${nippo.className} text-gradient bg-four-color font-medium`}
          >
            SIBĀQ 25
          </h1>

          <p className="font-light mt-0.5 md:mt-2">
            DHIU National <br />
            Arts Fest
          </p>
        </div>
        <Celebrate />
      </div>
      <Image
        priority={true}
        src={LeftSide}
        alt="Left Side"
        className="h-screen -z-10 object-cover object-right absolute left-0"
      />
      <Image
        priority={true}
        src={RightSide}
        alt="Right Side"
        className="h-screen -z-10 absolute object-cover object-left -right-0"
      />

      {/* <Image
        src={Sea}
        alt="Right Side"
        className="w-screen absolute bottom-0"
      /> */}
    </div>
  );
};

export default HeroSection;
