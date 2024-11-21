import Image from "next/image";
import Camera from "@/assets/static/gallery-camera-bg.jpg";
import Logo from "@/assets/vector/logo/sibaq-logo-for-dark-bg.svg";
import RoundArrow from "@/components/RoundArrow";
import Grid from "@/components/gallery/Grid";

export default function Gallery() {
  return (
    <>
      <section className="mx-5 md:mx-24 mt-14">
        <div className="relative hidden md:block">
          <Image
            src={Camera}
            alt="camera"
            priority={true}
            placeholder="blur"
            className="md:rounded-[5.5rem] 2xl:w-full bg-black"
          />
          <div className="inset-0 absolute p-24 flex flex-col items-start gap-10 justify-center">
            <Image
              src={Logo}
              alt="Sibaq Logo"
              priority={true}
              className="w-32"
            />
            <h2 className="text-white text-[2.8rem] 2xl:text-5xl leading-[3rem]">
              We have made a special <br /> album&nbsp;
              <span className="text-gradient bg-four-color">
                just for you...
              </span>
            </h2>
            <button className="px-4 py-1.5 flex gap-1.5 items-center justify-center text-lg font-light border-[0.5px] border-white rounded-full transition-colors duration-300 hover:bg-opacity-20 mt-2 text-white bg-white bg-opacity-10">
              View More
              <RoundArrow className="from-red/80 to-red/5 w-6 h-6 bg-white" />
            </button>
          </div>
        </div>
        <Grid />
      </section>
    </>
  );
}
