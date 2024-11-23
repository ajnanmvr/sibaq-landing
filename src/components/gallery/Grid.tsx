"use client";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import RoundArrow from "../RoundArrow";
import Error from "../Error";
import Lightbox from "./Lightbox";
import { GET_GALLERY } from "@/graphql/gallery";
const dummyimages = [
  "/gallery/baraf-1.jpg",
  "/gallery/baraf-2.jpg",
  "/gallery/baraf-3.jpg",
  "/gallery/baraf-4.jpg",
  "/gallery/baraf-5.jpg",
  "/gallery/baraf-6.jpg",
  "/gallery/baraf-7.jpg",
  "/gallery/baraf-7.jpg",
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

  const { data, loading, error } = useQuery(GET_GALLERY);
  let images =
    data?.gallery?.map((img: { photo: string }) => img.photo).filter(Boolean) ||
    [];
  images = [...images, ...dummyimages];
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const changeImage = (step: number) => {
    setCurrentImage((currentImage + step + images.length) % images.length);
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
          images.map((photo: string, index: number) => (
            <div
              key={index}
              className="flex justify-center items-center relative cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo}
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
        <Lightbox
          images={images}
          currentImage={currentImage}
          isOpen={isOpen}
          onClose={closeLightbox}
          onNext={() => changeImage(1)}
          onPrev={() => changeImage(-1)}
        />
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
