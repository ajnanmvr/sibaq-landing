import Image from 'next/image';
import RedShape from '@/assets/vector/about-sibaq/red-shape.svg';
import BlueShape from '@/assets/vector/about-sibaq/blue-shape.svg';
import TealShape from '@/assets/vector/about-sibaq/teal-shape.svg';
import OrangeShape from '@/assets/vector/about-sibaq/orange-shape.svg';
import SibaqLogo from '@/assets/vector/logo/sibaq-logo-without-text.svg';

const AboutSibaq = () => {
  return (
    <div className="flex justify-center md:min-h-screen flex-col items-between md:px-32 px-8 md:my-24 bg-white">
      <div className="flex justify-between w-full">
        <Image src={RedShape} alt="Red Shape" className="scale-85 hidden md:block" />
        <Image src={BlueShape} alt="Blue Shape" className="scale-85 hidden md:block" />
      </div>
      <div className="text-center my-16 flex justify-center flex-col items-center gap-10">
        <Image src={SibaqLogo} alt="Sibaq Logo" className='scale-[70%] md:scale-85' />
        <p className="text-2xl md:text-3xl tracking-tighter md:px-32">
        <span className="text-reveal text-[rgba(0,0,0,0.1)] bg-clip-text bg-gradient-to-r from-black via-[#000000b5] to-black">
        SIBĀQ 2025, <br /> Darul Huda National Arts Fest is an intercollegiate arts fest conducted biennially, among under graduate colleges and off campuses of Darul Huda Islamic University. The event is officially sanctioned and supported by Darul Huda Islamic University and its Office of Academic Affairs (OAA) to support and promote development of educational activities of concerned students.
        </span>
        </p>
      </div>
      <div className='flex justify-between'>
        <Image src={TealShape} alt="Teal Shape" className="scale-85 hidden md:block" />
        <Image src={OrangeShape} alt="Orange Shape" className="scale-85 hidden md:block" />
      </div>

    </div>
  );
};

export default AboutSibaq;
