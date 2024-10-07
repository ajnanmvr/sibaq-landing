import Image from 'next/image';
import RedShape from '@/assets/vector/red-shape.svg';
import BlueShape from '@/assets/vector/blue-shape.svg';
import TealShape from '@/assets/vector/teal-shape.svg';
import OrangeShape from '@/assets/vector/orange-shape.svg';
import SibaqLogo from '@/assets/vector/sibaq-logo-without-text.svg';

const AboutSibaq = () => {
  return (
    <div className="flex justify-center min-h-screen flex-col items-between px-32 my-24 bg-white">
      <div className="flex justify-between">
        <Image src={RedShape} alt="Red Shape" className="scale-85" />
        <Image src={BlueShape} alt="Blue Shape" className="scale-85" />
      </div>
      <div className="text-center my-16 flex justify-center flex-col items-center gap-10">
        <Image src={SibaqLogo} alt="Sibaq Logo" className='scale-85' />
        <p className="text-gray-600 text-3xl tracking-tighter px-32">
        <span className="text-reveal text-[rgba(0,0,0,0.1)] bg-clip-text bg-gradient-to-r from-black via-[#000000b5] to-black">
        SIBĀQ 2025, Darul Huda National Arts Fest is an intercollegiate arts fest conducted biennially, among under graduate colleges and off campuses of Darul Huda Islamic University. The event is officially sanctioned and supported by Darul Huda Islamic University and its Office of Academic Affairs (OAA) to support and promote development of educational activities of concerned students.
        </span>
        </p>
      </div>
      <div className='flex justify-between'>
        <Image src={TealShape} alt="Teal Shape" className="scale-85" />
        <Image src={OrangeShape} alt="Orange Shape" className="scale-85" />
      </div>

    </div>
  );
};

export default AboutSibaq;
