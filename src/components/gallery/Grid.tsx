"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import RoundArrow from "../RoundArrow";
import CloseIcon from "@/assets/vector/close.svg";
import Error from "../Error";
import { GET_GALLERY } from "@/graphql/gallery";

interface Image {
  photo: string;
}

interface GalleryData {
  gallery: Image[];
}

function Grid() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const { data, loading, error } = useQuery<GalleryData>(GET_GALLERY);

  const images = (data?.gallery || []).filter((image) => image?.photo);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className="mt-14 mx-5 gap-4 md:gap-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        {loading ? (
          <div className="bg-slate-200 animate-pulse h-96 w-full rounded-[40px]"></div>
        ) : (
          images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.photo}
                alt={`Gallery image ${index + 1}`}
                className="rounded-[40px] mb-8 hover:scale-[101%] transition-transform duration-300 md:rounded-[55px]"
                width={400}
                height={400}
              />
            </div>
          ))
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative min-h-[80vh] min-w-[60vw] max-w-[80vw] flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage]?.photo || ""}
              alt={`Enlarged gallery image ${currentImage + 1}`}
              className="rounded-[3rem] object-contain bg-gradient-to-bl from-yellow/20 via-red/20 to-green/20 backdrop-blur-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              fill
            />
            <div
              onClick={closeLightbox}
              className="bg-red hover:bg-ruby-red transition-colors absolute top-10 right-10 h-9 w-9 rounded-full flex justify-center items-center"
            >
              <Image src={CloseIcon} alt="Close Icon" className="w-4 h-4" />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-10 bg-gradient-to-tr text-white text-3xl p-2"
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-3xl p-2"
              aria-label="Next image"
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
