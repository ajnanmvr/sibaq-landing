import Image from "next/image";
import SibaqLogo from "@/assets/vector/logo/sibaq-logo-without-text.svg";
import FooterContact from "@/components/FooterContact";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row min-h-[80vh] max-w-6xl mx-auto lg:justify-center gap-16 p-8 items-center">
        <div className="flex-grow flex flex-col gap-4 items-start">
          <h1 className="text-gradient text-5xl font-medium">SIBĀQ 25</h1>

          <p className="text-lg opacity-60 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id,
            laboriosam repudiandae voluptatibus aliquam quibusdam, aut sunt
            minus molestiae nobis dolorem exercitationem quo eius ab autem
            obcaecati velit est dolor. minus molestiae nobis dolorem
            exercitationem quo eius ab autem obcaecati velit est dolor.
          </p>
          <button className="bg-red text-white px-4 py-1.5 rounded-3xl border border-red hover:bg-transparent transition hover:text-red">
            Read More
          </button>
        </div>
        <Image
          src={SibaqLogo}
          alt="CPET Updates"
          width={500}
          height={500}
          className="rounded-[50px] h-96 w-96 object-contain"
        />
      </div>

      <FooterContact />
    </div>
  );
}
