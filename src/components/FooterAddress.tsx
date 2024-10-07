import FBLink from "@/assets/vector/FB Small.svg";
import ITLink from "@/assets/vector/InstgramIcon.svg";
import WTLink from "@/assets/vector/WhatsappIcon.svg";
import SYLink from "@/assets/vector/SpotifyIcon.svg";
import YTLink from "@/assets/vector/YoutubeIcon.svg";
import SibaqLogo from "@/assets/vector/SBQLogo.svg";
import Menushape from "@/assets/vector/MenuIcon.png";
import Link from "next/link";
import Image from "next/image";

const FooterAddress = () => {
  return (
    <div className="w-full bg-white py-10 flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-start gap-10 px-4 sm:px-0">
        <div className="flex flex-col gap-4">
          <Image src={SibaqLogo} alt="Sibaq Logo" />
          <p className="text-gray-600 text-sm leading-relaxed tracking-normal">
            Darul Huda Islamic University,
            <br />
            Hidaya Nagar, Chemmad,
            <br />
            Tirurangadi PO, Malappuram Dist.
            <br />
            Pin: 676306, Kerala, India
          </p>

          <div className="flex gap-0.5 mt-4">
            <Link href="#">
              <Image src={FBLink} alt="Sibaq Facebook Page Link Icon" />
            </Link>
            <Link href="#">
              <Image src={ITLink} alt="Sibaq Instgram Page Link Icon" />
            </Link>
            <Link href="#">
              <Image src={WTLink} alt="Sibaq Whatsapp Page Link Icon" />
            </Link>
            <Link href="#">
              <Image src={SYLink} alt="Sibaq Spotify Page Link Icon" />
            </Link>
            <Link href="#">
              <Image src={YTLink} alt="Sibaq Youtube Page Link Icon" />
            </Link>
          </div>

          <p className="text-gray-500 text-xs mt-4 tracking-tight">
            © All rights reserved | Sibaq Committee 2024
          </p>
        </div>

        <div className="flex flex-col items bg-gradient-to-b from-[#f7fafc] to-[#ffffff] p-8 rounded-3xl shadow-xl max-w-md w-full">
          <div className="flex items-center flex-col justify-center gap-2 mb-4">
            <Image src={Menushape} alt="Colors of Sibaq Logo" />
            <p className="text-[35px] font-low mb-1 tracking-tighter">
              Never Miss Anything
            </p>
          </div>
          <p className="text-center font-extralight text-lr rounded-full inline px-3 ">
            Keep Tracking Sibaq Events and be part of the prestigious Art Fest
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-[70px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
          />
          <button className="w-full bg-teal-500 text-white py-3 rounded-[70px] hover:bg-teal-600 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterAddress;
