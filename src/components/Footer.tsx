import SibaqLogo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import MenuIcon from "@/assets/static/menu-icon.png";
import Link from "next/link";
import Image from "next/image";
import { socialMediaLinks } from "@/libs/socialMediaLinks";

export default function Footer() {
  return (
    <footer className="mt-16 w-full">
      <hr className="h-[0.100rem] bg-black opacity-10 mx-10 md:mx-28" />
      <div className="pt-16 pb-10 md:pb-16 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col items-center sm:flex-row justify-between gap-10 px-4 sm:px-0">
          <div className="flex flex-col gap-4 items-center md:items-start justify-center">
            <Image src={SibaqLogo} alt="Sibaq Logo" className="w-44" />
            <p className="leading-tight text-center md:text-left font-light opacity-75">
              Darul Huda Islamic University, Hidaya Nagar,
              <br />
              Chemmad, Tirurangadi PO, Malappuram Dist.
              <br />
              Pin: 676306, Kerala, India
            </p>

            <div className="flex gap-0.5 mt-4">
              {socialMediaLinks.map(({ platform, url, color, icon }, key) => (
                <Link href={url} key={key}>
                  <div
                    className={`w-full h-full rounded-[20px] p-2 flex justify-center items-center bg-opacity-10 hover:bg-opacity-25 transition-colors duration-300 ${
                      color && "bg-" + color
                    }`}
                  >
                    <Image
                      src={icon}
                      alt={platform + " Icon"}
                      className="w-8 h-8"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-sm hidden md:block opacity-40 mt-4 font-light">
              © All rights reserved | Sibaq Committee 2024
            </p>
          </div>

          <form className="flex w-full md:w-min flex-col md:px-16 py-10 rounded-[80px] text-center gap-2 shadow-subscribe-section px-10 items-center">
            <Image
              src={MenuIcon}
              alt="colors of Sibaq Logo"
              className="animate-spin-slow w-9 mb-1"
            />
            <p className="text-2xl md:text-[1.8rem] font-medium tracking-tighter">
              Never Miss Anything
            </p>
            <p className="font-extralight md:text-lg opacity-60 leading-tight">
              Keep Tracking Sibaq Events and be part of the prestigious Art Fest
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[22rem] placeholder:opacity-60 p-3 text-lg md:text-xl rounded-[70px] text-center focus:outline-none focus:ring-2 bg-green bg-opacity-10 focus:ring-green "
            />
            <button className="w-full text-lg md:text-xl bg-green text-white py-3 rounded-[70px] hover:bg-opacity-85 transition-colors">
              Subscribe
            </button>
          </form>

          <p className="text-sm text-center w-full sm:hidden opacity-40  font-light">
            © All rights reserved | Sibaq Committee 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
