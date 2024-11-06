// import NewsCard from "@/components/NewsCard";
import BreadCrumb from "@/components/BreadCrumb";
// import UpdateCard from "@/components/UpdateCard";
import UpdateCards from "@/components/UpdateCards";
import Image from "next/image";
import React from "react";
// const data = ["D", "", "", "", "", ""];

const updatesIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-8 h-8 lg:w-24 lg:h-24" viewBox="0 0 512 512">
  <g>
    <g>
      <g>
        <path d="M414.682,218.274c0-4.465-3.618-8.084-8.084-8.084H212.727c-4.465,0-8.084,3.62-8.084,8.084     c0,4.465,3.62,8.084,8.084,8.084h193.871C411.063,226.358,414.682,222.738,414.682,218.274z" />
        <path d="M245.038,285.642c-4.465,0-8.084,3.62-8.084,8.084s3.62,8.084,8.084,8.084h1.078c4.465,0,8.084-3.62,8.084-8.084     s-3.62-8.084-8.084-8.084H245.038z" />
        <path d="M457.764,134.783V51.2c0-28.231-22.969-51.2-51.2-51.2H105.053c-28.231,0-51.2,22.969-51.2,51.2v212.948     C23.917,265.561,0,290.375,0,320.674c0,31.204,25.369,56.589,56.552,56.589h147.707v28.003c0,3.609,1.694,7.017,4.65,9.352     c0.001,0.001,0.002,0.001,0.002,0.001c5.026,3.97,12.608,3.97,17.637,0l41.887-33.081c3.958-3.126,6.228-7.631,6.228-12.359     s-2.269-9.233-6.228-12.359l-41.887-33.081c-5.029-3.972-12.61-3.971-17.637-0.001c-2.957,2.335-4.652,5.743-4.652,9.353v28.004     H70.021V51.2c0-19.316,15.716-35.032,35.032-35.032h301.512c19.317,0,35.032,15.716,35.032,35.032v83.537h-134.62v-28.003     c0-3.61-1.695-7.018-4.652-9.353c-5.027-3.971-12.608-3.969-17.635,0l-41.887,33.081c-3.959,3.126-6.229,7.631-6.229,12.359     s2.27,9.233,6.228,12.359l41.888,33.081c5.028,3.971,12.609,3.97,17.633,0.002c2.958-2.334,4.654-5.743,4.654-9.354v-28.004     H449.59c0.059,0.001,0.12,0.001,0.179,0h5.679c22.267,0,40.383,18.132,40.383,40.421c0,21.51-16.873,39.15-38.068,40.355v-52.751     c0-4.465-3.618-8.084-8.084-8.084c-4.466,0-8.084,3.62-8.084,8.084V460.8c0,19.316-15.715,35.032-35.032,35.032H105.053     c-19.316,0-35.032-15.716-35.032-35.032v-54.434c0-4.465-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.62-8.084,8.084V460.8     c0,28.231,22.969,51.2,51.2,51.2h301.512c28.231,0,51.2-22.969,51.2-51.2V247.869C487.876,246.648,512,221.753,512,191.326     C512,160.9,487.876,136.004,457.764,134.783z M53.853,361.005c-21.015-1.394-37.684-18.95-37.684-40.332     c0-21.381,16.67-38.938,37.684-40.332V361.005z M220.427,339.509l37.569,29.67l-37.569,29.671V339.509z M290.807,172.491     l-37.569-29.67l37.569-29.671V172.491z" />
        <path d="M406.598,361.095h-96.936c-4.466,0-8.084,3.62-8.084,8.084c0,4.465,3.618,8.084,8.084,8.084h96.936     c4.466,0,8.084-3.62,8.084-8.084C414.682,364.714,411.063,361.095,406.598,361.095z" />
        <path d="M105.02,301.811h107.706c4.465,0,8.084-3.62,8.084-8.084s-3.62-8.084-8.084-8.084H105.02     c-4.465,0-8.084,3.62-8.084,8.084S100.556,301.811,105.02,301.811z" />
        <path d="M406.598,285.642h-96.936c-4.466,0-8.084,3.62-8.084,8.084s3.618,8.084,8.084,8.084h96.936     c4.466,0,8.084-3.62,8.084-8.084S411.063,285.642,406.598,285.642z" />
        <path d="M210.04,142.821c0-4.465-3.62-8.084-8.084-8.084H105.02c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084     h96.935C206.42,150.905,210.04,147.286,210.04,142.821z" />
        <path d="M276.273,301.811h1.077c4.466,0,8.084-3.62,8.084-8.084s-3.618-8.084-8.084-8.084h-1.077     c-4.466,0-8.084,3.62-8.084,8.084S271.807,301.811,276.273,301.811z" />
        <path d="M179.337,210.189c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084h1.077c4.465,0,8.084-3.62,8.084-8.084     c0-4.465-3.62-8.084-8.084-8.084H179.337z" />
        <path d="M105.02,226.358h43.082c4.465,0,8.084-3.62,8.084-8.084c0-4.465-3.62-8.084-8.084-8.084H105.02     c-4.465,0-8.084,3.62-8.084,8.084C96.936,222.738,100.556,226.358,105.02,226.358z" />
      </g>
    </g>
  </g>
</svg>)

export default function updates() {
  return (
    <>
      <BreadCrumb title="Updates" iconPath={updatesIcon} />
      <section className="py-10 md:px-16 px-5">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center gap-8 items-center p-5 lg:p-0 lg:pl-16 rounded-3xl overflow-hidden bg-gray-100 border border-gray-500">
          <div className="flex-grow flex flex-col gap-3 items-start">
            <p className="text-xs bg-gray-300 px-2 py-1 rounded-full">Updated Today</p>
            <h1 className="text-red tracking-tighter text-4xl font-bold line-clamp-2 leading-none">
              Darul Huda SIBAQ 25 Logo Launched
            </h1>
            <p className="max-w-2xl opacity-60 line-clamp-4 text-xs text-justify">
              Anwar is good boy and ajnan is a bad guy and there are somanay bad
              gooys which they all are ralalted with ajanan. some time when we see
              mr ajnan we will seem he is like a mad guy in reality he is ultra
              mad guy when he is standing alone and walking alone.
            </p>
            <button className="text-xs text-black px-4 py-1.5 rounded-xl border border-black hover:bg-transparent transition hover:text-white hover:bg-black">
              Read More &gt;
            </button>
          </div>
          <Image
            src="/logo-launch.JPG"
            width={600}
            height={600}
            alt="CPET Updates"
            className="object-cover h-[200px] lg:h-full rounded-3xl lg:rounded-none"
          />
        </div>

        {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.map((data, key) => (
          <React.Fragment key={key}>
            <UpdateCard localKey={key} />
          </React.Fragment>
        ))}
      </div> */}
        <UpdateCards />
      </section>
    </>
  );
}
