import Image from "next/image";
import Mahdiyya from '@/assets/mahdiyya.jpg'
import RoundArrow from "@/assets/vector/round-arrow.svg"

export default function EventTile() {
    return (
        <section className="hidden mt-20 lg:flex items-center justify-center">
            <div className="relative rounded-t-[60px] rounded-b-[140px] h-[450px] w-[78vw] overflow-hidden">
                <Image src={Mahdiyya} alt="Madhiyya Background Image" fill className="object-cover" />
                <div className="absolute inset-0 max-w-[400px] flex flex-col justify-center items-start mb-2 mx-20">
                    <h2 className=" font-semibold text-[45px]">
                        <span className="text-red-950">Logo</span> Launching
                    </h2>
                    <p className="text-lg">
                        Welcome to the Mahdiyya Program, Designed for girls in higher secondary and degree classes. Our mission is to provide a robust education in Islamic Studies, combined with academic excellence.
                    </p>
                    <button className="arrow-btn mt-4">View More <Image src={RoundArrow} alt="arrow sign indicating navigation" height={25} /></button>
                </div>
            </div>

        </section>
    )
}

