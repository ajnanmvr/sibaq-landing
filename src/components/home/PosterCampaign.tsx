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
              className={`${nippo.className} capitalize text-[0.7rem] tracking-tight text-wrap leading-3 text-gray-600 absolute top-[258px] left-[164px] w-[100px] sm:top-[220px] sm:left-[141px] sm:w-[97px]`}
            >
              {inputValue}
            </p>
            {croppedImage ? (
              <img
                src={croppedImage}
                alt=""
                className="rounded-t-full absolute top-[10.7rem] left-[48px] w-[4.75rem] sm:top-[9.2rem] sm:left-[2.53rem] sm:w-[4.14rem]"
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
          {croppedImage && (
            <div className="mt-4">
              <div className="flex justify-start space-x-2 flex-row text-center sm:pt-2">
                <button
                  onClick={downloadPoster}
                  className="py-1 px-7 sm:px-3 bg-green-500 dark:bg-red text-white rounded-full flex justify-center items-center"
                >
                  Download
                </button>
                <a
                  className="py-1 px-1 bg-blue-500 text-white rounded-full dark:bg-green"
                  href="whatsapp://send?text=The text to share!"
                  data-action="share/whatsapp/share"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  ></svg>
                </a>
                <a
                  className="py-1 px-1 bg-blue-700 text-white rounded-full dark:bg-orange-500"
                  href="whatsapp://send?text=The text to share!"
                  data-action="share/whatsapp/share"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  ></svg>
                </a>
                <a
                  className="py-1 px-1 bg-pink-500 text-white rounded-full dark:bg-blue"
                  onClick={clearPoster}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  ></svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterCampaign;
