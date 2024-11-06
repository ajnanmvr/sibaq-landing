import BreadCrumb from "@/components/BreadCrumb";

const downloadsIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-24 h-24" viewBox="0 0 1920 1920">
  <path d="M1016.47 903.048v710.738l185.902-185.9 79.962 79.849L960 1829.955l-322.334-322.22 79.962-79.85 185.901 185.901V903.048h112.942ZM960 56c221.816 0 408.847 143.661 478.08 342.212 10.052-.678 19.99-3.388 30.155-3.388 249.149 0 451.765 202.616 451.765 451.764s-202.616 451.765-451.765 451.765h-112.94v-112.941h112.94c186.805 0 338.824-152.02 338.824-338.824s-152.019-338.823-338.824-338.823c-1.92 0-3.727.564-5.647.677 2.146 18.523 5.647 36.706 5.647 55.793 0 44.16-5.76 88.094-16.94 130.673l-109.215-28.913c8.81-33.204 13.214-67.426 13.214-101.76 0-217.976-177.318-395.294-395.294-395.294-212.442 0-385.13 168.96-393.6 379.37 38.174 18.409 74.202 41.788 105.374 72.282l-78.946 80.753c-53.082-52.066-123.219-80.64-197.534-80.64-155.746 0-282.353 126.72-282.353 282.353 0 155.746 126.607 282.353 282.353 282.353h169.412v112.94H395.294C177.318 1298.353 0 1121.036 0 903.06c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.224 2.71 61.553 5.986C482.597 257.487 697.073 56 960 56Z" fillRule="evenodd" />
</svg>);

export default function Downloads() {
  return (
    <>
    <BreadCrumb title="Downloads" iconPath={downloadsIcon} />
      <div className="md:px-52 flex flex-col justify-center items-center pt-20">
        <div>
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">GENERAL</h1>
          <hr className="border-2 border-blue rounded-full" />

          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-yellow border border-yellow-half hover:border-yellow bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-yellow-half group-hover:from-yellow group-hover:via-yellow-half  to-yellow group-hover:to-yellow  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-yellow">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-yellow h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-red border border-red-half hover:border-red bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-red-half group-hover:from-red group-hover:via-red-half  to-red group-hover:to-red  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-red">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-red h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-blue border border-blue-half hover:border-blue bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-blue-half group-hover:from-blue group-hover:via-blue-half  to-blue group-hover:to-blue  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-blue">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-blue h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-green border border-green-half hover:border-green bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-green-half group-hover:from-green group-hover:via-green-half  to-green group-hover:to-green  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-green">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-green h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">NIICS</h1>
          <hr className="border-2 border-blue rounded-full" />
          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-yellow border border-yellow-half hover:border-yellow bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-yellow-half group-hover:from-yellow group-hover:via-yellow-half  to-yellow group-hover:to-yellow  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-yellow">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-yellow h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-yellow border border-yellow-half hover:border-yellow bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-red-half group-hover:from-red group-hover:via-red-half  to-red group-hover:to-red  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-red">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-red h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-yellow border border-yellow-half hover:border-yellow bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-blue-half group-hover:from-blue group-hover:via-blue-half  to-blue group-hover:to-blue  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-blue">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-blue h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>

            <div className="group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-yellow border border-yellow-half hover:border-yellow bg-opacity-10">
              <div className="bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-green-half group-hover:from-green group-hover:via-green-half  to-green group-hover:to-green  transition-colors duration-300 flex-1 rounded-3xl">
                PDF
              </div>
              <div className="p-1 flex flex-col gap-2">
                <h3 className="text-2xl leading-6 font-medium text-green">
                  <span className="text-sm">SIBAQ 2024</span><br /> Concept Note
                </h3>
                <div className="flex items-center gap-1">
                  <div className="bg-green h-2 w-2 rounded-full"></div>
                  <p className="opacity-60 text-sm">01-01-1001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
