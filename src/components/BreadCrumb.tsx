import Image from "next/image";
import Logo from "@/assets/vector/logo/sibaq-logo-with-text.svg";

interface BreadCrumbProps {
    title: string;
    iconPath: any;
}

export default function BreadCrumb({ title, iconPath }: BreadCrumbProps) {
    return (
        <div style={{backgroundImage: "url('bg-1.jpg')"}} className="w-full h-52 lg:h-96 px-12 pt-6 pb-3 md:py-12 flex flex-col items-center justify-between bg-cover bg-bottom rounded-b-3xl">
            <div className="fixed w-[95%] h-24 px-12 flex items-center rounded-3xl z-10 bg-white shadow-xl">
                <Image src={Logo} alt="Sibaq Logo" width={100} height={100} />
            </div>
            <div className="h-24"></div>
            <div className="w-full lg:h-24 lg:px-16 flex flex-row items-center justify-between">
                <h1 className="text-3xl lg:text-7xl font-semibold text-white">{title}</h1>
                {iconPath}
            </div>
        </div>
    )
}