import Image from "next/image";
import SibaqLogo from "@/assets/vector/logo/sibaq-logo-without-text.svg";
import FooterContact from "@/components/FooterContact";
import BreadCrumb from "@/components/BreadCrumb";

const contactIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-24 h-24" viewBox="0 0 64 64">
  <g id="_x32_5_attachment" /> <g id="_x32_4_office" /> <g id="_x32_3_pin" /> <g id="_x32_2_business_card" /> <g id="_x32_1_form" /> <g id="_x32_0_headset">
    <g>
      <path d="M63,40.2202c0-5.9472-3.9073-10.9949-9.2881-12.7225v-6.0148c0-10.5703-10.1641-19.8423-21.752-19.8423    s-21.752,9.272-21.752,19.8423v6.0442C4.8693,29.2792,1,34.303,1,40.2202C1,47.5884,6.9941,53.583,14.3623,53.583h3.6738    c1.9336,0,3.5059-1.5728,3.5059-3.5059v-19.71c0-1.8768-1.4827-3.4017-3.3359-3.4926v-5.1373    c0-6.0151,5.8818-12.7432,13.7539-12.7432c7.8701,0,13.75,6.728,13.75,12.7432v5.1458c-1.8132,0.1329-3.252,1.636-3.252,3.4841    v19.71c0,1.9331,1.5723,3.5059,3.5059,3.5059h2.6728l-0.0048,4.5596h-5.6547c-0.3737-1.429-1.6642-2.4917-3.2086-2.4917h-2.0977    c-1.835,0-3.3281,1.4932-3.3281,3.3281s1.4932,3.3281,3.3281,3.3281h2.0977c1.4242,0,2.6327-0.9039,3.1068-2.1646h6.7556    c0.5518,0,0.999-0.4473,1-0.999l0.0059-5.6111C57.5385,53.0181,63,47.2512,63,40.2202z M39.7686,60.3071h-2.0977    c-0.7324,0-1.3281-0.5957-1.3281-1.3281s0.5957-1.3281,1.3281-1.3281h2.0977c0.7324,0,1.3281,0.5957,1.3281,1.3281    S40.501,60.3071,39.7686,60.3071z M13.3623,51.5396C7.5635,51.0313,3,46.1489,3,40.2202s4.5635-10.811,10.3623-11.3193V51.5396z     M19.542,30.3672v19.71c0,0.8306-0.6758,1.5059-1.5059,1.5059h-2.6738V28.8574h2.6738    C18.8662,28.8574,19.542,29.5347,19.542,30.3672z M31.96,6.9941c-8.2451,0-15.7539,7.0273-15.7539,14.7432v5.1201h-1.8438    c-0.735,0-1.4512,0.0753-2.1543,0.19v-5.5645c0-9.5049,9.2295-17.8423,19.752-17.8423s19.752,8.3374,19.752,17.8423v5.5522    c-0.6778-0.1064-1.3671-0.1777-2.0742-0.1777H47.71v-5.1201C47.71,14.0215,40.2031,6.9941,31.96,6.9941z M44.458,50.0771v-19.71    c0-0.8325,0.6758-1.5098,1.5059-1.5098h2.6738V51.583h-2.6738C45.1338,51.583,44.458,50.9077,44.458,50.0771z M50.6377,51.5396    V28.9009C56.4365,29.4092,61,34.2915,61,40.2202S56.4365,51.0313,50.6377,51.5396z" />
    </g>
  </g> <g id="_x31_9_video_call" /> <g id="_x31_8_letter_box" /> <g id="_x31_7_papperplane" /> <g id="_x31_6_laptop" /> <g id="_x31_5_connection" /> <g id="_x31_4_phonebook" /> <g id="_x31_3_classic_telephone" /> <g id="_x31_2_sending_mail" /> <g id="_x31_1_man_talking" /> <g id="_x31_0_date" /> <g id="_x30_9_review" /> <g id="_x30_8_email" /> <g id="_x30_7_information" /> <g id="_x30_6_phone_talking" /> <g id="_x30_5_women_talking" /> <g id="_x30_4_calling" /> <g id="_x30_3_women" /> <g id="_x30_2_writing" /> <g id="_x30_1_chatting" />
</svg>)

export default function Contact() {
  return (
    <>
      <BreadCrumb title="Contact Us" iconPath={contactIcon} />
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
    </>
  );
}
