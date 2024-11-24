import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import LogoRound from "@/assets/static/sibaq-logo-round-color.png";
import Link from "next/link";

export default function Header({
  pageTitle,
  keywords,
}: {
  pageTitle?: string;
  keywords: string[];
}) {
  const slide = [
    ...keywords,
    ...keywords,
    ...keywords,
    ...keywords,
    ...keywords,
    ...keywords,
  ];
  return (
    <>
      <header className="w-full sticky top-0 md:static backdrop-blur-xl bg-white/70 rounded-b-[3rem] z-10">
        <div className="flex justify-between max-h-40 items-center px-10 md:py-5">
          <div className="flex-1 flex justify-start items-center">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo Sibaq"
                className="h-14 w-min md:ml-20 my-8 hidden md:block"
              />
              <Image
                src={LogoRound}
                alt="sibaq logo"
                className="block md:hidden w-14 h-14"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center gap-2 justify-center py-8 md:p-0">
            <h1 className="md:text-4xl text-2xl font-semibold tracking-tighter text-gradient bg-four-color capitalize text-center">
              {pageTitle}
            </h1>
          </div>
          <div className="flex-1"></div>
        </div>
      </header>
      <div className="opacity-50 w-full overflow-hidden z-40">
        <div className="flex capitalize text-xl md:text-2xl w-[calc(100px*17)] gap-2 animate-scroll items-center">
          {slide.map((keyword, key) => (
            <span
              key={key}
              className={
                key % 4 === 0
                  ? "text-red"
                  : key % 4 === 1
                  ? "text-yellow"
                  : key % 4 === 2
                  ? "text-blue"
                  : "text-green"
              }
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
