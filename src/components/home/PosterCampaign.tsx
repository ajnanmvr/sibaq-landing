"use client";
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import html2canvas from "html2canvas";
import localFont from "next/font/local";
import Modal from "../Model";
import { CroppedArea } from "@/libs/types";
import InstagramIcon from "@/assets/vector/social-media/instagram.svg";
import FacebookIcon from "@/assets/vector/social-media/facebook.svg";
import WhatsappIcon from "@/assets/vector/social-media/whatsapp.svg";
import NewImage from "next/image";

const nippo = localFont({ src: "../../fonts/nippo.ttf" });

const PosterCampaign = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<CroppedArea | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleCropComplete = useCallback(
    (_: any, croppedAreaPixels: CroppedArea) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const applyCrop = useCallback(() => {
    if (!selectedImage || !croppedAreaPixels) return;

    const image = new Image();
    image.src = selectedImage;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      setCroppedImage(canvas.toDataURL("image/png"));
      setIsModalOpen(false);
    };
  }, [selectedImage, croppedAreaPixels]);

  const downloadPoster = () => {
    const posterElement = document.querySelector(".poster") as HTMLElement;
    if (!posterElement) return;

    html2canvas(posterElement, {
      scale: 3, // Increase resolution
      useCORS: true, // Avoid cross-origin issues
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png", 1.0); // High-quality PNG
      link.download = "poster.png";
      link.click();
    });
  };

  const clearPoster = () => {
    setInputValue("");
    setSelectedImage(null);
    setCroppedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center flex-col sm:flex-row my-3 mx-2 space-y-8 sm:space-y-0 p-10 bg-white shadow-lg rounded-3xl w-96 sm:w-[40rem] ">
        <div className="overflow-hidden w-[20rem] sm:w-20rem rounded-3xl">
          <div className="container poster bg-white relative ">
            <img src="/campaign-poster.jpg" alt="" className="w-full" />
            <p
              className={`${nippo.className} capitalize text-[0.7rem] tracking-tight text-wrap leading-3 text-gray-600 absolute top-[258px] left-[164px] w-[100px] sm:top-[222.2px] sm:left-[141.8px] sm:w-[97px]`}
            >
              {inputValue}
            </p>
            {croppedImage ? (
              <img
                src={croppedImage}
                alt=""
                className="rounded-t-full absolute top-[10.7rem] left-[48px] w-[4.75rem] sm:top-[9.31rem] sm:left-[2.61rem] sm:w-[4.1rem]"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[20rem] justify-start px-4 sm:pr-0 sm:pl-8">
          <h1 className={`${nippo.className} text-2xl text-center leading-7`}>
            Participating in <br /> Sibaq Poster Campaign
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className="py-3 px-4 mb-2 border-2 border-red-400 rounded-full my-2"
            />
            <button
              type="submit"
              className="bg-red rounded-full py-3 px-4 gap-2 text-white items-center md:inline-flex"
            >
              Select Image
            </button>
            <Modal
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
              onClose={closeModal}
              title="Crop Your Image"
            >
              <div className="flex flex-col items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border-2 border-black rounded-lg w-3/4 mb-4"
                />
                {selectedImage && (
                  <div className="w-3/4 relative h-96 rounded-lg">
                    <div className=" relative h-72">
                      <div className="crop-container dark:bg-white">
                        <Cropper
                          image={selectedImage}
                          crop={crop}
                          zoom={zoom}
                          aspect={4 / 5}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onCropComplete={handleCropComplete}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={applyCrop}
                      className="py-2 px-4 bg-green-500 text-white rounded-lg mt-4 w-full dark:bg-red"
                    >
                      Apply Crop
                    </button>
                  </div>
                )}
              </div>
            </Modal>
          </form>
          {!croppedImage && (
            <div className="mt-4 flex justify-center space-x-2 flex-row text-center sm:pt-2">
              <button
                onClick={downloadPoster}
                className="px-7 py-2 bg-green-500 dark:bg-red text-white rounded-full flex justify-center items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512" width="15" height="15">
                  <g>
                    <path d="M188.821,377.6c37.49,37.491,98.274,37.491,135.765,0.001c0,0,0.001-0.001,0.001-0.001l68.523-68.523   c12.712-12.278,13.064-32.536,0.786-45.248c-12.278-12.712-32.536-13.064-45.248-0.786c-0.267,0.257-0.529,0.52-0.786,0.786   l-59.371,59.349L288,32c0-17.673-14.327-32-32-32l0,0c-17.673,0-32,14.327-32,32l0.448,290.709l-58.901-58.901   c-12.712-12.278-32.97-11.926-45.248,0.786c-11.977,12.401-11.977,32.061,0,44.462L188.821,377.6z" />
                    <path d="M480,309.333c-17.673,0-32,14.327-32,32v97.941c-0.012,4.814-3.911,8.714-8.725,8.725H72.725   c-4.814-0.012-8.714-3.911-8.725-8.725v-97.941c0-17.673-14.327-32-32-32s-32,14.327-32,32v97.941   C0.047,479.42,32.58,511.953,72.725,512h366.549c40.146-0.047,72.678-32.58,72.725-72.725v-97.941   C512,323.66,497.673,309.333,480,309.333z" />
                  </g>
                </svg>
                Download
              </button>
              {/* <button
                onClick={downloadPoster}
                  className="py-3 px-1 bg-blue-500 text-white rounded-full dark:bg-green"
                  
                >
                  <NewImage src={WhatsappIcon} alt="Whatsapp" className="w-10 h-6 mx-auto"/>
                </button> */}
              {/*<a
                  className="py-1 px-1 bg-blue-700 text-white rounded-full dark:bg-orange-500"
                  href="whatsapp://send?text=The text to share!"
                  data-action="share/whatsapp/share"
                >
                 <NewImage src={WhatsappIcon} alt="Whatsapp" />
               </a>*/}
              <a
                className="px-[0.625rem] py-2 bg-pink-500 text-white rounded-full dark:bg-blue"
                onClick={clearPoster}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  width="20" height="20" className="fill-white">
                  <path d="m23,21h-8.633l8.174-8.205c1.939-1.946,1.939-5.113,0-7.06l-3.254-3.265c-.945-.948-2.203-1.47-3.541-1.47s-2.597.522-3.54,1.468L1.459,13.175c-1.939,1.946-1.939,5.113,0,7.059l1.583,1.589c.745.748,1.777,1.177,2.834,1.177h17.124c.553,0,1-.448,1-1s-.447-1-1-1ZM13.62,3.882c.567-.569,1.322-.882,2.126-.882s1.558.313,2.125.882l3.254,3.265c1.163,1.167,1.163,3.068,0,4.236l-4.97,4.989-7.509-7.534,4.974-4.955Zm-7.744,17.118c-.536,0-1.039-.209-1.417-.588l-1.584-1.589c-1.163-1.167-1.163-3.067-.002-4.232l4.357-4.341,7.514,7.54-3.199,3.211h-5.669Z" />
                </svg>
              </a>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default PosterCampaign;
