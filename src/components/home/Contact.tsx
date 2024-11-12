import PaperPlane from "@/assets/vector/paper-plane.svg";
import SibaqLogo from "@/assets/static/sibaq-logo-with-colorful-bg.png";
import ContactUsLine from "@/assets/vector/line-for-contact-us.svg";
import Image from "next/image";
import Link from "next/link";
import { facebook, instagram, whatsapp } from "@/libs/socialMediaLinks";
const socialMediaLinks = [facebook, instagram, whatsapp];

const Contact = () => {
  return (
    <div className="flex flex-col items-center md:mt-20">
      <div className="flex-col items-center justify-center hidden md:flex">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter md:block ">
          Contact Us
        </h2>
        <Image
          src={ContactUsLine}
          alt="A Line as a part of style"
          className="scale-50 md:scale-85 my-2 md:my-4"
        />
      </div>
      <div className="mt-10 bg-opacity-30 rounded-[3rem] md:rounded-[80px] shadow-slate-100 shadow-logo-round px-4 md:px-12 py-12 flex items-center justify-center gap-12">
        <Image
          src={SibaqLogo}
          alt="Sibaq Logo with colourful background"
          width={420}
          className="hidden md:block"
        />

        <div>
          <div className="flex flex-col gap-3 ">
            <div className="flex md:hidden flex-col items-center justify-center my-10">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter md:block">
                Contact Us
              </h2>
              <Image
                src={ContactUsLine}
                alt="A Line as a part of style"
                className="scale-50 md:scale-85 my-2 md:my-4"
              />
            </div>

            <label htmlFor="name" className="text-xl ml-4">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name Here"
              className="px-6 py-4 w-full md:w-[35rem] -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label htmlFor="email" className="text-xl ml-4">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 w-full md:w-[35rem] -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label htmlFor="message" className="text-xl ml-4">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type Your Message"
              className="p-5 text-2xl h-32 -mt-2 rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
            ></textarea>
          </div>

          <div className="pl-2 mt-6 flex flex-col gap-6 md:flex-row items-center justify-between text-xl">
            <div className="flex justify-center items-center gap-2">
              <p>Contact via</p>
              <div className="flex justify-center gap-1">
                {socialMediaLinks.map(({ platform, url, color, icon }, key) => (
                  <Link href={url} key={key}>
                    <div
                      className={`w-full h-full rounded-[20px] p-2 flex justify-center items-center bg-opacity-10 hover:bg-opacity-25 transition-colors duration-300 ${
                        color && "bg-" + color
                      }`}
                    >
                      <Image
                        src={icon}
                        alt={platform}
                        className={
                          "w-8 h-8 opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-100"
                        }
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button className="h-10 inline-flex items-center justify-center content-center border border-yellow gap-2 mb-10 md:mb-0 bg-yellow text-black py-8 md:py-2 px-6 rounded-3xl md:rounded-2xl w-full md:w-auto bg-opacity-10 md:hover:bg-opacity-30 transition-colors">
              <Image src={PaperPlane} alt="Send icon" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
