import FBLink from "@/assets/vector/FB Small.svg";
import ITLink from "@/assets/vector/InstgramIcon.svg";
import WTLink from "@/assets/vector/WhatsappIcon.svg";
import PaperPlane from "@/assets/vector/Plane.svg";
import SBQLogo from "@/assets/vector/SibaqLogo2.png";

import Image from "next/image";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(32,117,188,1) 0%, rgba(9,171,177,1) 28%, rgba(234,54,80,1) 56%, rgba(234,143,35,1) 94%);",
        }}
        className="h-2 w-28 rounded-lg"
      ></div>
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-white via-[#ffffffcd] to-[#fffffffa] py-10">
        <div className="bg-white  rounded-3xl shadow-xl p-10 w-3/4 flex sm:flex-row gap-6">
          <div className="sm:w-1/2 ">
            <div className="">
            <Image src={SBQLogo} alt="Sibaq Logo" />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-black text-2xl transform translate-x-4"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name Here"
                className="w-full p-5 text-2xl bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-200"
              />
              <label
                htmlFor="email"
                className="text-black text-2xl transform translate-x-4"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-5 text-2xl bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-200"
              />
              <label
                htmlFor="message"
                className="text-black text-2xl transform translate-x-4"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type Your Message"
                className="w-full p-5 text-2xl h-40 bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center text-xl">
              <h1>Contact via</h1>
              <div className="pl-2 pb-2 flex justify-center gap-0.5 mt-4">
                <Link href="#">
                  <Image src={FBLink} alt="Sibaq Facebook Page Link Icon" />
                </Link>
                <Link href="#">
                  <Image src={ITLink} alt="Sibaq Instgram Page Link Icon" />
                </Link>
                <Link href="#">
                  <Image src={WTLink} alt="Sibaq Whatsapp Page Link Icon" />
                </Link>
              </div>
              <div className="pl-32">
                <button className="w-28 h-10 flex items-center justify-between bg-orange-100 text-black py-2 px-6 rounded-2xl hover:bg-orange-200 transition-all">
                <Image src={PaperPlane} alt="Share icon" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
