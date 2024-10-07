import FBLink from "@/assets/vector/FB Small.svg";
import ITLink from "@/assets/vector/InstgramIcon.svg";
import WTLink from "@/assets/vector/WhatsappIcon.svg";
import PaperPlane from "@/assets/vector/paper-plane.svg";
import SibaqLogo from "@/assets/static/sibaq-logo-with-colorful-bg.png";
import ContactUsLine from "@/assets/vector/line-for-contact-us.svg";

import Image from "next/image";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">


      <h2 className="text-5xl font-medium tracking-tighter">Contact Us</h2>
      <Image src={ContactUsLine} alt="A Line as a part of style" className="scale-85 my-4" />
      <div className="mt-10 bg-opacity-30 rounded-[80px] shadow-logo-round p-12 flex items-center justify-center gap-12">
        <Image src={SibaqLogo} alt="Sibaq Logo with colourful background" width={420} />

        <div className="">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-xl ml-4">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name Here"
              className="px-6 w-[35rem] py-4 -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label
              htmlFor="email"
              className="text-xl ml-4">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-6 w-[35rem] py-4 -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label
              htmlFor="message"
              className="text-xl ml-4">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type Your Message"
              className="p-5 text-2xl h-32 -mt-2 rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
            ></textarea>
          </div>

          <div className="mt-4 flex items-center justify-between text-xl ">
            <div>

              <p>Contact via</p>
              {/* <div className="pl-2 pb-2 flex justify-center gap-0.5 mt-4">
              <Link href="#">
                <Image src={FBLink} alt="Sibaq Facebook Page Link Icon" />
              </Link>
              <Link href="#">
                <Image src={ITLink} alt="Sibaq Instgram Page Link Icon" />
              </Link>
              <Link href="#">
                <Image src={WTLink} alt="Sibaq Whatsapp Page Link Icon" />
              </Link>
            </div> */}
            </div>

            <button className="h-10 inline-flex items-center gap-2 bg-y text-black py-2 px-6 rounded-2xl bg-opacity-10 hover:bg-opacity-30 transition-colors">
              <Image src={PaperPlane} alt="Send icon" />
              Send
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default FooterContact;
