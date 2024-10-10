import fbSmallbg from "@/assets/vector/Icons/BG/fbsmall.png";
import igBg from "@/assets/vector/Icons/BG/ig.png";
import waBg from "@/assets/vector/Icons/BG/wt.png";
import syBg from "@/assets/vector/Icons/BG/sy.png";
import ytSmallbg from "@/assets/vector/Icons/BG/ytsmall.png";
import fbIcon from "@/assets/vector/Icons/fb.svg";
import igIcon from "@/assets/vector/Icons/ig.svg";
import waIcon from "@/assets/vector/Icons/wa.svg";
import syIcon from "@/assets/vector/Icons/sy.svg";
import ytIcon from "@/assets/vector/Icons/yt.svg";
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
            <Image
              src={SibaqLogo}
              alt="Sibaq Logo"
              className="scale-85 -ml-4"
            />
            <p className="leading-tight font-light opacity-75">
              Darul Huda Islamic University, Hidaya Nagar,
              <br />
              Chemmad, Tirurangadi PO, Malappuram Dist.
              <br />
              Pin: 676306, Kerala, India
            </p>

            <div className="flex gap-0.5 mt-4">
              <Link href="#">
                <div className="relative">
                  <Image
                    src={fbSmallbg}
                    alt="Facebook Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={fbIcon}
                      alt="Facebook Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#">
              <div className="relative">
                  <Image
                    src={igBg}
                    alt="Instagram Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={igIcon}
                      alt="Instagram Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#" className="">
              <div className="relative">
                  <Image
                    src={waBg}
                    alt="Whatsapp Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={waIcon}
                      alt="Whatsapp Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#">
              <div className="relative">
                  <Image
                    src={syBg}
                    alt="Spotify Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={syIcon}
                      alt="Spotify Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#">
              <div className="relative">
                  <Image
                    src={ytSmallbg}
                    alt="Youtube Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={ytIcon}
                      alt="Youtube Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <p className="text-sm opacity-40 mt-4 font-light">
              © All rights reserved | Sibaq Committee 2024
            </p>
          </div>

          <form className="flex flex-col px-16 py-12 rounded-[80px] text-center gap-2 shadow-subscribe-section items-center">
            <Image
              src={MenuIcon}
              alt="colors of Sibaq Logo"
              className="scale-85"
            />
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
      </div>
    </footer>
  );
};

export default FooterAddress;
