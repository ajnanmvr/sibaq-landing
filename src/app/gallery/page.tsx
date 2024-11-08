import Image from "next/image";

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
