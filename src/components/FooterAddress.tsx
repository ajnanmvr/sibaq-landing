import FBLink from "@/assets/vector/FB Small.svg";
import ITLink from "@/assets/vector/InstgramIcon.svg";
import WTLink from "@/assets/vector/WhatsappIcon.svg";
import SYLink from "@/assets/vector/SpotifyIcon.svg";
import YTLink from "@/assets/vector/YoutubeIcon.svg";
import SibaqLogo from "@/assets/vector/SibaqLogo.svg";
import MenuIcon from "@/assets/static/menu-icon.png";
import Link from "next/link";
import Image from "next/image";

const FooterAddress = () => {
  return (
    <footer className="mt-20">
      <hr className="h-[0.100rem] bg-black opacity-5 mx-28" />
      <div className="py-20 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-start gap-10 px-4 sm:px-0">
          <div className="flex ml-12 flex-col gap-4">
            <Image src={SibaqLogo} alt="Sibaq Logo" className="scale-85 -ml-4" />
            <p className="leading-tight font-light opacity-75">
              Darul Huda Islamic University, Hidaya Nagar,
              <br />
              Chemmad, Tirurangadi PO, Malappuram Dist.
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
              <Link href="#" className="">
                <Image src={WTLink} alt="Sibaq Whatsapp Page Link Icon" />
              </Link>
              <Link href="#">
                <Image src={SYLink} alt="Sibaq Spotify Page Link Icon" />
              </Link>
              <Link href="#">
                <Image src={YTLink} alt="Sibaq Youtube Page Link Icon" />
              </Link>
            </div>

            <p className="text-sm opacity-40 mt-4 font-light">
              © All rights reserved | Sibaq Committee 2024
            </p>
          </div>

          <form className="flex flex-col px-16 py-12 rounded-[80px] text-center gap-2 shadow-subscribe-section items-center">
            <Image src={MenuIcon} alt="colors of Sibaq Logo" className="scale-85" />
            <p className="text-[1.8rem] font-medium tracking-tighter">
              Never Miss Anything
            </p>
            <p className="font-extralight text-lg opacity-60 leading-tight mb-2">
              Keep Tracking Sibaq Events and be part of <br />
              the prestigious Art Fest
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[22rem] placeholder:opacity-60 p-3 text-xl rounded-[70px] text-center focus:outline-none focus:ring-2 bg-g bg-opacity-10 focus:ring-g "
            />
            <button className="w-full text-xl bg-g text-white py-3 rounded-[70px] hover:bg-opacity-85 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div></footer>

  );
};

export default FooterAddress;
