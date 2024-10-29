import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";
import Link from "next/link";
import { socialMediaLinks } from "@/libs/socialMediaLinks";

const Header = () => {
  return (
    <header className="hidden md:flex justify-between items-center px-20 py-8">
      <div className="flex items-center justify-start flex-1">
        <Image src={Logo} alt="Logo Sibaq" className="h-14 w-min" />
      </div>
      <nav className="text-[1.35rem] gap-6 flex justify-center items-center font-light">
        <Link href="#" className="text-red">
          Home
        </Link>
        <Link className="opacity-60" href="#">
          Results
        </Link>
        <Link className="opacity-60" href="#">
          Events
        </Link>
        <Link className="opacity-60" href="#">
          Contact
        </Link>
      </nav>

      <div className="flex gap-4 items-center justify-end flex-1">
        {socialMediaLinks.map(({ platform, url, color, icon }, key) => (
          <Link href={url} key={key}>
            <div className="grayscale hover:grayscale-0">
              <Image src={icon} alt={platform + " Icon"} className="w-6 h-6" />
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
