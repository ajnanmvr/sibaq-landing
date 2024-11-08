import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function updates() {
  return (
    <>
      <Header
        pageTitle="Updates"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <section className="mt-16 md:px-28 px-10">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center gap-8 items-center p-5  rounded-[45px]">
          <div className="flex-grow flex flex-col gap-3 items-start">
            <p className="opacity-50">Updated Today</p>
            <h2 className="text-red font-[470] tracking-[-0.18rem] text-[2.8rem] leading-[3.1rem] line-clamp-2 pr-20 ">
              Darul Huda SIBAQ 25 Logo Launched by sadiqal shib kdekl
            </h2>
            <p className="max-w-2xl text-xl leading-6 line-clamp-5">
              Anwar is good boy and ajnan is a bad guy and there are somanay bad
              gooys which they all are ralalted with ajanan. some time when we
              see mr ajnan we will seem he is like a mad guy in reality he is
              ultra mad guy when he is standing alone and walking alone. gooys
              which they all are ralalted with ajanan. some time when we see mr
              ajnan we will seem he is like a mad guy in reality he is ultra mad
              guy when he is standing alone and walking alone.
            </p>
            <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
              View More{" "}
              <svg
                width="31"
                height="31"
                className="rotate-45 h-6 w-6"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15.5"
                  cy="15.4985"
                  r="15.5"
                  transform="rotate(-90 15.5 15.4985)"
                  fill="url(#paint0_linear_104_18)"
                />
                <path
                  d="M16.2071 8.42752C15.8166 8.037 15.1834 8.037 14.7929 8.42752L8.42893 14.7915C8.03841 15.182 8.03841 15.8152 8.42893 16.2057C8.81946 16.5962 9.45262 16.5962 9.84315 16.2057L15.5 10.5488L21.1569 16.2057C21.5474 16.5962 22.1805 16.5962 22.5711 16.2057C22.9616 15.8152 22.9616 15.182 22.5711 14.7915L16.2071 8.42752ZM16.5 21.8625L16.5 9.13463L14.5 9.13463L14.5 21.8625L16.5 21.8625Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_104_18"
                    x1="15.5"
                    y1="-0.00146294"
                    x2="15.5"
                    y2="30.9985"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="rgba(234, 54, 80, 0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
          <Image
            src="/logo-launch.JPG"
            width={550}
            height={700}
            alt="Updates"
            className="-mr-3 lg:h-full rounded-[80px]"
          />
        </div>

        {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.map((data, key) => (
          <React.Fragment key={key}>
            <UpdateCard localKey={key} />
          </React.Fragment>
        ))}
      </div> */}
        {/* <UpdateCards /> */}
      </section>
    </>
  );
}
