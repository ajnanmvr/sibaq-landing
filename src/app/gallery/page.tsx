import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";

const galleryIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-24 h-24" viewBox="0 0 24 24">
  <path d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7" stroke="#fff" stroke-width="1.5"/>
  <path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" stroke="#fff" stroke-width="1.5"/>
  <circle cx="16.5" cy="11.5" r="1.5" stroke="#fff" stroke-width="1.5"/>
  <path d="M19.9999 20L17.1157 17.8514C16.1856 17.1586 14.8004 17.0896 13.7766 17.6851L13.5098 17.8403C12.7984 18.2542 11.8304 18.1848 11.2156 17.6758L7.37738 14.4989C6.6113 13.8648 5.38245 13.8309 4.5671 14.4214L3.24316 15.3803" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  </svg>);

const images = [
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
  "/logo-launch.JPG",
];

export default function Gallery() {
  return (
    <>
    <BreadCrumb title="Gallery" iconPath={galleryIcon} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-20 items-center justify-center pt-20 gap-3">
        {images.map((image, key) => (
          <div
            key={key}
            className={`rounded-3xl flex justify-center items-center overflow-hidden relative hover:scale-[101%] transition-transform duration-300 border-2 ${key % 4 === 0
                ? "hover:border-yellow"
                : key % 4 === 1
                  ? "hover:border-red"
                  : key % 4 === 2
                    ? "hover:border-blue"
                    : "hover:border-green"
              } gallery`}
          >
            <Image src={image} alt="galley image" width={400} height={400} />
            <div
              className="absolute inset-0 bg-opacity-25"
            ></div>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
