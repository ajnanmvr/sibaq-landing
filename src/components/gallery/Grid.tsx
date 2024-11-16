"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import RoundArrow from "../RoundArrow";
import CloseIcon from "@/assets/vector/close.svg";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

function Grid() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      <div className="columns-1 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 mt-14 mx-5 gap-4 md:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center relative cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt="gallery image"
              placeholder="blur"
              
              className="rounded-[40px] mb-8 hover:scale-[101%] transition-transform duration-300 md:rounded-[55px]"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevImage}
              className="absolute left-10 text-white text-3xl p-2"
            >
              &#10094;
            </button>
            <Image
              src={images[currentImage]}
              alt="enlarged gallery image"
              className="rounded-[3rem]"
              width={800}
              height={800}
            />
            <div
              onClick={closeLightbox}
              className="bg-red hover:bg-ruby-red transition-colors absolute top-10 right-10 h-9 w-9 rounded-full flex justify-center items-center"
            >
              <Image src={CloseIcon} alt="Close Icon" className="w-4 h-4" />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-3xl p-2"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-10">
        <button className="px-4 py-1.5 flex gap-2 items-center justify-center font-medium text-lg border-[0.5px] border-black rounded-full transition-colors duration-300 hover:bg-red hover:bg-opacity-5 mt-2">
          Load More
          <RoundArrow className="from-green/80 to-green/10 w-6 h-6" />
        </button>
      </div>
    </>
  );
}

export default Grid;
