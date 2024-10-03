import Image from "next/image"
import DHLogo from "@/assets/logo/dh-logo.png"
import DHIU from "@/assets/logo/dhiu.png"
import RubyLogo from "@/assets/logo/ruby-logo.png"
function DHDetails() {
    return (
        <div className="relative ">
            <div className="flex absolute inset-0 ">
                <div className="opacity-10 bg-gradient-to-t from-[#91B8B4] via-ruby-red to-50% rounded-br-[200px] h-full w-full"></div>
                <div className="opacity-10 bg-gradient-to-b from-[#E0CDA2] via-dh-blue to-50% rounded-tl-[200px] h-full w-full"></div>
            </div>
            <div className="py-40 flex flex-col items-center gap-10 justify-center">
                <div className="flex items-center justify-center gap-10">
                    <h3 className="text-dh-blue font-regular text-[3.1rem] leading-[3rem] text-right tracking-tighter w-96">Darul Huda <br /> National Arts fest</h3>
                    <Image src={DHLogo} alt="Darul Huda Logo" className="scale-[85%] shadow-logo-round rounded-full" />
                    <p className="w-96 text-black text-3xl font-light opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                </div>
                <Image src={DHIU} alt="Darul Huda Islamic Univerity PG Block Building" className="scale-[83%]" />
                <div className="flex items-center justify-center gap-10">
                    <p className="w-96 text-black text-3xl font-light opacity-80 text-right ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                    <Image src={RubyLogo} alt="Darul Huda Rubee Jubilee Fortieth Anniversary Celebrations Logo" className="scale-[85%] shadow-logo-round rounded-full" />
                    <h3 className="text-ruby-red font-regular text-[3.1rem] leading-[3rem] tracking-tighter w-96">Celebrating Forty <br />
                        Years of Legacy</h3>
                </div>
            </div>
        </div>
    )
}

export default DHDetails