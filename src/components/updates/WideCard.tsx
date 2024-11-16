import RoundArrow from "@/components/RoundArrow";
import Image from "next/image";

export default function WideCard() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-center gap-8 items-center">
      <div className="flex-grow flex flex-col gap-3 items-start">
        <p className="opacity-50">Updated 5 Days Ago</p>
        <h2 className="text-red font-[470] tracking-tighter text-3xl md:tracking-[-0.18rem] md:text-[2.7rem] md:leading-[3.1rem] line-clamp-2 md:pr-20 ">
          Logo Launched by Sayyid Sadiqali Shihab Thangal for Darul Huda
          National Arts Fest '25
        </h2>
        <p className="max-w-2xl text-xl leading-6 line-clamp-5">
          Darul Huda Islamic University proudly unveiled the official logo for
          SIBĀQ 2025, the upcoming Darul Huda National Arts Fest, in a momentous
          event presided over by Sayyid Sadiqali Shihab Thangal. This
          intercollegiate arts festival, set to celebrate the rich tapestry of
          Muslim culture and creativity, promises to be a landmark in fostering
          talent, innovation, and collaboration among students. 
          The logo reflects the spirit of unity and cultural diversity that SIBĀQ
          embodies. This biennial event, supported by the University's Office of
          Academic Affairs, is renowned for enhancing students' skills through
          competitive programs spanning trending and traditional fields.
        </p>
        <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
          View More
          <RoundArrow className="from-red/80 to-red/5 w-6 h-6" />
        </button>
      </div>
      <Image
        src="/gallery/sibaq-logo-launching.jpg" 
        width={550}
        height={700}
        alt="Updates"
        className="lg:h-full rounded-[45px] md:rounded-[80px]"
      />
    </div>
  );
}
