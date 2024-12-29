import Image from "next/image";
import DHLogo from "@/assets/static/dh-logo.png";
import DHIU from "@/assets/static/dhiu.png";
import RubyLogo from "@/assets/static/ruby-logo.png";
import HyperlinkIcon from "@/assets/vector/hyperlink.svg";
import Link from "next/link";

export default function DHDetails() {
  return (
    <div className="relative md:my-28 w-full">
      <div className="md:flex hidden absolute inset-0 -z-10">
        <div className="opacity-10 bg-gradient-to-t from-[#91B8B4] via-ruby-red to-50% rounded-br-[200px] h-full w-full"></div>
        <div className="opacity-10 bg-gradient-to-b from-[#E0CDA2] via-dh-blue to-50% rounded-tl-[200px] h-full w-full"></div>
      </div>
      <div className="md:py-40 py-20 flex flex-col-reverse md:flex-col items-center md:gap-10 justify-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14 bg-gradient-to-tl from-[#E0CDA2]/10 via-dh-blue/10 md:from-transparent md:via-transparent -mt-8 md:mt-0 pb-20 md:pb-0 rounded-b-[3rem] ">
          <h3 className="text-dh-blue font-regular text-[2.5rem] leading-[2.6rem] md:text-[3.1rem] md:leading-[3rem] md:text-right tracking-tighter md:w-[28rem]">
            Darul Huda <br /> National Arts fest
          </h3>
          <Image
            src={DHLogo}
            alt="Darul Huda Logo"
            className="-order-1 md:order-none shadow-logo-round rounded-full w-24 md:w-40 "
          />
          <p className="md:w-[28rem] text-black text-2xl px-8 md:text-3xl md:text-left font-light">
            A vibrant blend of creativity, culture, and intellect, fostering
            innovation, collaboration, and artistic excellence while bridging
            tradition and modernity in a shared journey of expression.
          </p>

          <Link
            href="https://dhiu.in/"
            className="text-white items-center mt-4 md:hidden inline-flex"
          >
            <Image
              src={HyperlinkIcon}
              className="border-[5px] p-2 bg-white z-10 box-content rounded-full border-blue"
              alt="Calendar Icon"
            />
            <p className="bg-blue rounded-r-full -ml-3 py-1.5 pl-4 pr-4 text-lg">
              Visit Website
            </p>
          </Link>
        </div>
        <Image
          src={DHIU}
          alt="Darul Huda Islamic Univerity PG Block Building"
          className="md:scale-[83%] overflow-hidden rounded-b-[2rem] w-full h-96 object-cover -mt-28 md:mt-0 md:h-auto md:w-auto"
        />
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-14 bg-gradient-to-t from-transparent via-ruby-red/10 md:from-transparent pb-40 md:pb-0">
          <p className="md:w-[28rem] text-black text-2xl px-8 md:text-3xl font-light md:text-right">
            Darul Huda celebrates forty years of excellence, integrating Islamic
            and modern education, empowering generations, and fostering
            scholarship, inclusivity, and community transformation.
          </p>
          <Image
            src={RubyLogo}
            alt="Darul Huda Rubee Jubilee Fortieth Anniversary Celebrations Logo"
            className="order-1 md:order-none shadow-logo-round rounded-full w-24 md:w-40 "
          />
          <h3 className="text-ruby-red md:text-left font-regular text-[2.5rem] leading-[2.6rem] md:text-[3.1rem] md:leading-[3rem] tracking-tighter md:w-[28rem]">
            Forty Years <br />
            and Beyond
          </h3>
        </div>
      </div>
    </div>
  );
}
