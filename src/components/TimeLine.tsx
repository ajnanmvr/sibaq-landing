import Image from "next/image";
import ArrowDown from "@/assets/vector/arrow-down.svg";
import SpinnerElement from "@/assets/static/spinner.png";
export default function TimeLine() {
  return (
    <div className="flex justify-center flex-col gap-2">
      <h3 className="font-semibold opacity-50 text-center tracking-tighter text-[4.2rem] inline-block text-transparent bg-clip-text bg-gradient-to-r from-y via-r to-g">
        Sibaq Timeline
      </h3>
      <div className="w-full flex justify-center">
        <p className="bg-b inline-flex gap-2 justify-center items-center  text-center text-xl bg-opacity-10 rounded-full px-5 py-2 font-light">
          Venue 1
          <Image
            src={ArrowDown}
            alt="an arrow to bottom"
            className="scale-90"
          />
        </p>
      </div>

      <div className="relative">
        <hr
          className="absolute h-2 bg-four-color"
        />
        <div className="flex justify-center items-center my-10">
         
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="flex flex-col items-center">
              <div className="relative flex justify-center items-center w-32 h-32 rounded-full border-8 bg-white border-b1">
                <span className="text-gray-700 text-lg font-bold text-center">
                  March
                  <br />
                  <span className="text-5xl">25</span>
                </span>
              </div>
              <span className="mt-4 text-center text-black text-xl ">
                Official Announcement
                <br />
                <span>of Sibaq Dates </span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative flex justify-center items-center w-32 h-32 rounded-full border-8 bg-white border-g1">
                <span className="text-gray-700 text-lg font-bold text-center">
                  March
                  <br />
                  <span className="text-5xl">25</span>
                </span>
              </div>
              <span className="mt-4 text-center text-black text-xl ">
                Official Announcement
                <br />
                <span>of Sibaq Dates </span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative flex justify-center items-center w-52 h-52 rounded-full border-0 border-transparent">
                <Image
                  src={SpinnerElement}
                  alt="Sibaq Current Event Spinner Element"
                  className="absolute animate-spin-slow"
                />
                <span className="text-black text-xl font-bold text-center">
                  March
                  <br />
                  <span className="text-6xl">25</span>
                </span>
              </div>
              <span className="mt-4 text-center text-black text-xl ">
                Official Announcement
                <br />
                <span>of Sibaq Dates </span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative flex justify-center items-center w-32 h-32 rounded-full border-8 bg-white border-r1">
                <span className="text-gray-700 text-lg font-bold text-center">
                  March
                  <br />
                  <span className="text-5xl">25</span>
                </span>
              </div>
              <span className="mt-4 text-center text-black text-xl ">
                Official Announcement
                <br />
                <span>of Sibaq Dates </span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative flex justify-center items-center w-32 h-32 rounded-full border-8 bg-white border-y1">
                <span className="text-gray-700 text-lg font-bold text-center">
                  March
                  <br />
                  <span className="text-5xl">25</span>
                </span>
              </div>
              <span className="mt-4 text-center text-black text-xl ">
                Official Announcement
                <br />
                <span>of Sibaq Dates </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
