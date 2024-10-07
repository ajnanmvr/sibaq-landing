import Image from 'next/image';
import RedShape from '@/assets/vector/RedShape.svg';
import BlueShape from '@/assets/vector/BlueShape.svg';
import TealShape from '@/assets/vector/TealShape.svg';
import OrangeShape from '@/assets/vector/OrangeShape.svg';
import SibaQLogo from '@/assets/vector/SBQABLogo.svg'; 

const AboutSibaq = () => {
  return (
    <div className="relative flex justify-center items-center py-40 bg-white">
      <div className="absolute top-0 left-0">
        <Image src={RedShape} alt="Red Shape" className="w-16 h-16" />
      </div>
      <div className="absolute top-0 right-0">
        <Image src={BlueShape} alt="Blue Shape" className="w-16 h-16" />
      </div>
      <div className="text-center">
        <Image src={SibaQLogo} alt="Sibaq Logo" className="mx-auto mb-4" />
        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={TealShape} alt="Teal Shape" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={OrangeShape} alt="Orange Shape" className="w-16 h-16" />
      </div>
      
    </div>
  );
};

export default AboutSibaq;
