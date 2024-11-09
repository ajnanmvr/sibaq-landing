import ytBg from "@/assets/vector/Icons/BG/yt.png";
import fbBg from "@/assets/vector/Icons/BG/fb.png";
import PDF from "@/assets/vector/pdf.svg";
import CALE from "@/assets/vector/Cale.svg";
import BWButton from "@/assets/vector/BWbutten.svg";
import SBQLOGO from "@/assets/vector/FestivalLogo.png";
import Image from "next/image";
import Link from "next/link";

const LiveSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12">
      <div className="flex justify-center items-center mb-4">
        <div className="relative bg-red text-white text-xs font-light px-4 py-1 rounded-full flex items-center gap-2">
          <div className="items-center w-4 h-4">
            <Image src={BWButton} alt="Black & white Icon" />
          </div>
          Live
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <Link href="#">
          <Image src={fbBg} alt="Sibaq Facebook live Link Icon" />
        </Link>
        <Link href="#">
          <Image src={ytBg} alt="Sibaq Youtube live Link Icon" />
        </Link>
      </div>
      <h2 className="pt-16 text-5xl font-medium text-black mb-2">
        Never Miss Anything
      </h2>
      <p className="pt-6 text-thin font-extralight text-3xl text-gray-500 text-center whitespace-nowrap max-w-full mb-8">
        Keep Tracking Sibaq Events and be part of the prestigious Art Fest
      </p>
      <div className="pt-10 flex space-x-4 mb-8">
        <button className="flex items-center bg-green text-white py-2 px-4 rounded-full hover:bg-green transition">
        <Image src={CALE} alt="Calendar Icon" />
          Add to Calendar
        </button>
        <button className="flex items-center bg-blue text-white py-2 px-4 rounded-full hover:bg-blue transition">
          <Image src={PDF} alt="Pdf Icon" />
          Download PDF
        </button>
      </div>

      <div className="pt-10 w-96 h-96 rounded-full shadow-xl">
      <Image src={SBQLOGO} alt="Logo of Sibaq" />
      </div>
    </section>
  );
};
export default LiveSection;
