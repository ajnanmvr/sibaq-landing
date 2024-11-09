import Header from "@/components/Header";
import Image from "next/image";
import Camera from "@/assets/static/gallery-camera-bg.jpg";
import Logo from "@/assets/vector/logo/sibaq-logo-for-dark-bg.svg";
import RoundArrow from "@/assets/vector/RoundArrow";

const images = [
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
];

export default function Gallery() {
  return (
    <>
      <Header
        pageTitle="Gallery"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <div className="mx-24 mt-14">
        <div className="relative">
          <Image src={Camera} alt="camera" className="rounded-[5.5rem]" />
          <div className="inset-0 absolute p-24 flex flex-col items-start justify-between">
            <Image src={Logo} alt="Sibaq Logo" className="w-32" />
            <h2 className="text-white text-[2.8rem] leading-[3rem]">
              We have made a special <br /> album{" "}
              <span className="text-gradient">just for you...</span>
            </h2>
            <button className="px-4 py-1.5 flex gap-1.5 items-center justify-center text-lg font-light border-[0.5px] border-white rounded-full transition-colors duration-300 hover:bg-opacity-20 mt-2 text-white bg-white bg-opacity-10">
              View More
              <RoundArrow className="rotate-45 w-5 h-5" color="#09abb1" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mt-14 mx-3 gap-8">
          {images.map((image, key) => (
            <div
              key={key}
              className={`flex justify-center items-center relative`}
            >
              <Image
                src={image}
                alt="galley image"
                className="rounded-[55px]"
                width={400}
                height={400}
              />
              <div
                className={`absolute z-10 rounded-full border-white border-[6px] w-12 h-12 -right-[2.5rem] ${
                  key % 4 === 3 && "hidden"
                } ${
                  key % 5 === 0
                    ? "bg-yellow"
                    : key % 5 === 1
                    ? "bg-red"
                    : key % 5 === 2
                    ? "bg-blue"
                    : key % 5 === 3
                    ? "bg-green"
                    : "bg-blue"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
            View More
            <RoundArrow className="rotate-45 w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
