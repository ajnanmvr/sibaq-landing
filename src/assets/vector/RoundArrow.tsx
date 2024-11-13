import Image from "next/image";
import Arrow from "@/assets/vector/arrow-slashed-upwards.svg"
export default function RoundArrow({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={"flex bg-gradient-to-tl items-center justify-center rounded-full " + className}>
      <Image className="scale-90" src={Arrow} alt="arrow" />
    </div>
  );
}
