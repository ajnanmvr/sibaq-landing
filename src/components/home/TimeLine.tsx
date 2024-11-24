"use client";
import Image from "next/image";
import Schedule from "@/libs/schedule.json";
import { eliminationHosts } from "@/libs/eliminationHosts";
import { useEffect, useState } from "react";

function convertTo24Hour(time12h: any) {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}`;
}

export default function TimeLine() {
  const [lastProgram, setLastProgram] = useState<any>(null);
  const [currentProgram, setCurrentProgram] = useState<any>(null);
  const [nextProgram, setNextProgram] = useState<any>(null);
  const [hostIndex, setHostIndex] = useState<number>(0);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const [selectedVenue, setSelectedVenue] = useState("1");

  useEffect(() => {
    const updatePrograms = () => {
      console.log("Schedule:", Schedule);

      const fixedSchedule = Schedule.map((program) => ({
        ...program,
        startTime: new Date(`2024-11-24T${convertTo24Hour(program.startTime)}`),
        endTime: new Date(`2024-11-24T${convertTo24Hour(program.endTime)}`),
      })).sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

      console.log("Fixed Schedule:", fixedSchedule);

      const now = new Date();

      let last = null,
        current = null,
        next = null;

      for (let i = 0; i < fixedSchedule.length; i++) {
        const program = fixedSchedule[i];
        if (program.endTime < now) {
          last = program;
        } else if (program.startTime <= now && program.endTime >= now) {
          current = program;
          next = fixedSchedule[i + 1] || null;
          break;
        } else if (program.startTime > now) {
          current = null;
          next = program;
          break;
        }
      }

      setLastProgram(last);
      setCurrentProgram(current);
      setNextProgram(next);
    };

    updatePrograms();
    const interval = setInterval(updatePrograms, 60000);

    return () => clearInterval(interval);
  }, [Schedule]);

  useEffect(() => {
    if (lastProgram) console.log("lastProgram");
  }, [lastProgram]);

  return (
    <div className="flex justify-center gap-10 md:gap-20 items-center flex-col md:flex-row">
      <div className="bg-gradient-to-tr m-8 md:m-0 from-yellow/5 via-yellow/10 to-yellow/5 rounded-[4rem] gap-16 px-20 py-16  flex items-center justify-center">
        <svg
          width="59"
          height="295"
          viewBox="0 0 59 295"
          className="w-8 hidden sm:block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M58 278.656L10.363 278.656L10.363 294.93L2.7 294.93L2.69999 252.981L10.363 252.981L10.363 269.255L58 269.255L58 278.656ZM58 248.247L18.184 248.247L18.184 238.767L58 238.767L58 248.247ZM11.864 243.507C11.864 245.245 11.3373 246.694 10.284 247.852C9.178 248.958 7.835 249.511 6.25499 249.511C4.62233 249.511 3.30566 248.958 2.30499 247.852C1.25166 246.694 0.724995 245.245 0.724995 243.507C0.724995 241.769 1.25166 240.347 2.30499 239.241C3.30566 238.083 4.62233 237.503 6.25499 237.503C7.835 237.503 9.178 238.083 10.284 239.241C11.3373 240.347 11.864 241.769 11.864 243.507ZM58 230.972L18.184 230.972L18.184 222.598L23.635 221.808C21.6337 220.544 20.08 218.885 18.974 216.831C17.8153 214.725 17.236 212.328 17.236 209.642C17.236 207.641 17.4993 205.85 18.026 204.27C18.5527 202.638 19.3427 201.216 20.396 200.004C21.4493 198.74 22.766 197.713 24.346 196.923C22.134 195.449 20.396 193.526 19.132 191.156C17.868 188.786 17.236 186.206 17.236 183.414C17.236 180.096 17.9207 177.279 19.29 174.961C20.6067 172.644 22.5817 170.88 25.215 169.668C27.7957 168.457 30.982 167.851 34.774 167.851L58 167.851L58 177.252L35.722 177.252C32.3513 177.252 29.7707 177.937 27.98 179.306C26.1893 180.676 25.294 182.703 25.294 185.389C25.294 187.233 25.7417 188.865 26.637 190.287C27.5323 191.657 28.849 192.736 30.587 193.526C32.2723 194.316 34.3527 194.711 36.828 194.711L58 194.711L58 204.112L35.722 204.112C32.3513 204.112 29.7707 204.797 27.98 206.166C26.1893 207.536 25.294 209.59 25.294 212.328C25.294 214.066 25.7417 215.646 26.637 217.068C27.5323 218.438 28.849 219.517 30.587 220.307C32.2723 221.097 34.3527 221.492 36.828 221.492L58 221.492L58 230.972ZM58.948 142.352C58.948 146.302 58.1053 149.778 56.42 152.78C54.682 155.782 52.2593 158.125 49.152 159.811C46.0447 161.496 42.4633 162.339 38.408 162.339C34.1947 162.339 30.508 161.522 27.348 159.89C24.188 158.204 21.7127 155.861 19.922 152.859C18.1313 149.804 17.236 146.275 17.236 142.273C17.236 138.375 18.105 134.978 19.843 132.082C21.581 129.185 23.9247 126.947 26.874 125.367C29.7707 123.787 33.036 122.997 36.67 122.997C37.1967 122.997 37.776 122.997 38.408 122.997C39.04 122.997 39.6983 123.049 40.383 123.155L40.383 155.545L34.3 155.545L34.3 132.556C31.4033 132.661 29.1387 133.635 27.506 135.479C25.8207 137.322 24.978 139.613 24.978 142.352C24.978 144.3 25.4257 146.091 26.321 147.724C27.2163 149.356 28.5593 150.647 30.35 151.595C32.088 152.543 34.3 153.017 36.986 153.017L39.277 153.017C41.7523 153.017 43.8853 152.569 45.676 151.674C47.4667 150.726 48.836 149.462 49.784 147.882C50.6793 146.249 51.127 144.432 51.127 142.431C51.127 140.219 50.653 138.402 49.705 136.98C48.757 135.505 47.493 134.425 45.913 133.741L45.913 124.103C48.3883 124.84 50.6267 126.051 52.628 127.737C54.5767 129.422 56.1303 131.502 57.289 133.978C58.395 136.453 58.948 139.244 58.948 142.352ZM58 117.404L1.11999 117.404L1.11999 107.924L58 107.924L58 117.404ZM58 100.11L18.184 100.11L18.184 90.6301L58 90.6301L58 100.11ZM11.864 95.3701C11.864 97.1081 11.3373 98.5564 10.284 99.7151C9.17799 100.821 7.83499 101.374 6.25499 101.374C4.62232 101.374 3.30565 100.821 2.30499 99.7151C1.25165 98.5564 0.724989 97.1081 0.724989 95.3701C0.724989 93.6321 1.25165 92.2101 2.30499 91.1041C3.30565 89.9454 4.62232 89.3661 6.25499 89.3661C7.83499 89.3661 9.17799 89.9454 10.284 91.1041C11.3373 92.2101 11.864 93.6321 11.864 95.3701ZM58 82.835L18.184 82.835L18.184 74.461L24.82 73.75C22.5027 72.5387 20.6593 70.8007 19.29 68.536C17.9207 66.2714 17.236 63.5854 17.236 60.478C17.236 57.2654 17.9207 54.5267 19.29 52.262C20.6067 49.9974 22.5553 48.2594 25.136 47.048C27.7167 45.784 30.9293 45.152 34.774 45.152L58 45.152L58 54.632L35.643 54.632C32.325 54.632 29.7707 55.3694 27.98 56.844C26.1893 58.3187 25.294 60.5044 25.294 63.401C25.294 65.297 25.7417 67.0087 26.637 68.536C27.5323 70.0107 28.849 71.1957 30.587 72.091C32.2723 72.9337 34.3263 73.355 36.749 73.355L58 73.355L58 82.835ZM58.948 19.6733C58.948 23.6233 58.1053 27.0993 56.42 30.1013C54.682 33.1033 52.2593 35.447 49.152 37.1323C46.0447 38.8176 42.4633 39.6603 38.408 39.6603C34.1947 39.6603 30.508 38.844 27.348 37.2113C24.188 35.526 21.7127 33.1823 19.922 30.1803C18.1313 27.1256 17.236 23.597 17.236 19.5943C17.236 15.697 18.105 12.3 19.843 9.40329C21.581 6.50662 23.9247 4.26829 26.874 2.68829C29.7707 1.10829 33.036 0.318286 36.67 0.318285C37.1967 0.318285 37.776 0.318285 38.408 0.318285C39.04 0.318285 39.6983 0.370953 40.383 0.476288L40.383 32.8663L34.3 32.8663L34.3 9.87729C31.4033 9.98262 29.1387 10.957 27.506 12.8003C25.8207 14.6436 24.978 16.9346 24.978 19.6733C24.978 21.622 25.4257 23.4126 26.321 25.0453C27.2163 26.678 28.5593 27.9683 30.35 28.9163C32.088 29.8643 34.3 30.3383 36.986 30.3383L39.277 30.3383C41.7523 30.3383 43.8853 29.8906 45.676 28.9953C47.4667 28.0473 48.836 26.7833 49.784 25.2033C50.6793 23.5706 51.127 21.7536 51.127 19.7523C51.127 17.5403 50.653 15.7233 49.705 14.3013C48.757 12.8266 47.493 11.747 45.913 11.0623L45.913 1.42428C48.3883 2.16162 50.6267 3.37295 52.628 5.05828C54.5767 6.74362 56.1303 8.82395 57.289 11.2993C58.395 13.7746 58.948 16.566 58.948 19.6733Z"
            fill="#EA8F23"
          />
        </svg>

        <div className="flex items-center justify-center h-96 md:h-80">
          <div className="bg-yellow/20 w-2 rounded-full h-full"></div>
          <div className="-ml-[0.876rem] flex flex-col justify-between h-full max-w-[20rem] py-6">
            <div className="flex items-center gap-3">
              <div className="bg-yellow w-5 h-5 aspect-square rounded-full"></div>
              <div className="opacity-60">
                <p className="text-sm md:text-md">
                  {lastProgram?.startTime.toLocaleTimeString()} -{" "}
                  {lastProgram?.endTime.toLocaleTimeString()}
                </p>
                <p className="text-lg md:text-2xl tracking-tighter leading-5">
                  {lastProgram?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 -ml-3">
              <div className="bg-white w-10 h-10 flex items-center justify-center aspect-square rounded-full">
                <div className="bg-yellow w-5 h-5 rounded-full aspect-square animate-ping"></div>
              </div>
              <div>
                <p className="md:text-xl opacity-80">
                  {currentProgram?.startTime.toLocaleTimeString()} -{" "}
                  {currentProgram?.endTime.toLocaleTimeString()}
                </p>
                <p className="text-2xl md:text-3xl font-medium tracking-tighter">
                  {currentProgram?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-yellow w-5 h-5 aspect-square rounded-full"></div>
              <div className="opacity-60">
                <p className="text-sm md:text-md">
                  {nextProgram?.startTime.toLocaleTimeString()} -{" "}
                  {nextProgram?.endTime.toLocaleTimeString()}
                </p>
                <p className="text-lg md:text-2xl tracking-tighter leading-5">
                  {nextProgram?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center md:items-start px-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xl md:ml-2">Host</p>
          <div className="flex items-center gap-2">
            <Image
              src={"/gallery/9.jpg"}
              alt="Collage Name"
              width={80}
              height={80}
              className="w-14 h-14 object-cover rounded-xl"
            />
            <div
              className="relative"
              onClick={() => setOptionsOpen(!optionsOpen)}
            >
              <div className="group h-14 bg-yellow/10 group-hover:bg-yellow/20 transition-colors duration-300 gap-3 inline-flex items-center justify-center px-8 text-2xl  text-yellow rounded-xl cursor-pointer">
                {eliminationHosts[hostIndex]?.name}
                <div className="h-6 w-6 bg-yellow/20 group-hover:bg-yellow group-hover:text-white duration-300 transition-colors rounded-full items-center justify-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Bold"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                    className="fill-yellow group-hover:fill-white transition-colors duration-300"
                  >
                    <path d="M6.414,9H17.586a1,1,0,0,1,.707,1.707l-5.586,5.586a1,1,0,0,1-1.414,0L5.707,10.707A1,1,0,0,1,6.414,9Z" />
                  </svg>
                </div>
              </div>
              {optionsOpen && (
                <div className="absolute left-0 rounded-xl overflow-hidden">
                  {eliminationHosts?.map((host: any, index: number) => (
                    <div
                      key={index}
                      className="w-64 h-14 bg-yellow hover:bg-yellow transition-colors duration-300 gap-3 inline-flex items-center justify-center px-8 text-2xl  text-gray-300 hover:text-white border-b cursor-pointer"
                      onClick={() => setHostIndex(index)}
                    >
                      {host?.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xl md:ml-2">Venue</p>
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            {eliminationHosts[hostIndex]?.venues?.map(
              (venue: string, index: number) => (
                <div
                  key={index}
                  className={`h-14 min-w-14 ${
                    selectedVenue === venue && "border-2 border-yellow"
                  } px-8 bg-yellow/10 hover:bg-yellow/20 transition-colors duration-300 gap-3 inline-flex items-center justify-center text-2xl  text-yellow rounded-xl`}
                  onClick={() => setSelectedVenue(venue)}
                >
                  {venue}
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xl md:ml-2">Category</p>
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            {eliminationHosts[hostIndex]?.category?.map(
              (category: string, index: number) => (
                <div
                  key={index}
                  className={`h-14 min-w-14 ${
                    currentProgram?.category === category &&
                    "border-2 border-yellow"
                  } px-8 bg-yellow/10 hover:bg-yellow/20 transition-colors duration-300 gap-3 inline-flex items-center justify-center text-2xl  text-yellow rounded-xl`}
                >
                  {category}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
