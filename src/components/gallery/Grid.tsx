"use client"
import Image from "next/image";
import { useState } from "react";
import RoundArrow from "../RoundArrow";

const images = [
    "/logo-launch.JPG",
    "/4.webp",
    "/bg-1.jpg",
    "/logo-launch.JPG",
    "/4.webp",
    "/bg-1.jpg",
    "/logo-launch.JPG",
    "/4.webp",
    "/bg-1.jpg",
    "/logo-launch.JPG",
    "/4.webp",
    "/bg-1.jpg",
    "/logo-launch.JPG",
    "/4.webp",
    "/bg-1.jpg",

  ];
  
function Grid() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
  
    const openLightbox = (index: number) => {
      setCurrentImage(index);
      setIsOpen(true);
    };
  
    const closeLightbox = () => {
      setIsOpen(false);
    };
  
    const nextImage = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mt-14 mx-5 gap-4 md:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center relative cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt="gallery image"
              className="rounded-[40px] hover:scale-[101%] transition-transform duration-300 md:rounded-[55px]"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            &times;
          </button>
          <div className="relative flex items-center">
            <button
              onClick={prevImage}
              className="absolute left-0 text-white text-3xl p-2"
            >
              &#10094;
            </button>
            <Image
              src={images[currentImage]}
              alt="enlarged gallery image"
              className="rounded-lg"
              width={800}
              height={800}
            />
            <button
              onClick={nextImage}
              className="absolute right-0 text-white text-3xl p-2"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-10">
        <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
          View More
          <RoundArrow className="rotate-45 w-6 h-6" />
        </button>
      </div>
    </>
  );
}

export default Grid;
