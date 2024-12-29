"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import html2canvas from "html2canvas";
import localFont from "next/font/local";
import Modal from "../Model";

const nippo = localFont({ src: "../../fonts/nippo.ttf" });

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

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

    html2canvas(posterElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
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
    <div className="flex flex-col sm:flex-row my-3 mx-2 space-y-8 sm:space-y-0 p-10 bg-white shadow-lg rounded-3xl justify-between items-center w-96 sm:w-[40rem] ">
      <div className="container poster w-[20rem] bg-white bg-contain bg-no-repeat bg-center relative rounded-3xl overflow-hidden sm:w-1/2">
        <img
          src="/campaign-poster.jpg"
          alt=""
          className=" top-0 left-0 w-full"
        />
        <p
          className={`${nippo.className} capitalize text-[0.7rem] tracking-tight text-wrap leading-3 text-gray-600 absolute top-[263px] left-[170px] w-[100px] sm:top-[185px] sm:left-[120px] sm:w-[87px]`}
        >
          {inputValue}
        </p>
        {croppedImage ? (
          <img
            src={croppedImage}
            alt=""
            className="rounded-t-full absolute top-[10.5rem] left-[49px] w-[5.3rem] sm:top-[7.3rem] sm:left-[2.1rem] sm:w-[3.78rem]"
          />
        ) : (
          <div className="absolute top-[10.5rem] left-[49px] w-[5.3rem] sm:top-[7.3rem] sm:left-[2.1rem] sm:w-[3.78rem]"></div>
        )}
      </div>
      <div className="flex flex-col w-[22rem] justify-start px-4 sm:pr-0 sm:pl-8">
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
                        aspect={4 / 5} // Aspect ratio (square)
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
                className="py-1 pl-2 pr-7 sm:pr-5 bg-green-500 dark:bg-red text-white rounded-full flex justify-center items-center"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-1"
                >
                  <path
                    d="M42.6396 30.2564C42.3083 29.586 41.9333 28.8924 41.5208 28.1756C41.1555 27.5424 40.9655 26.7792 40.9704 25.9664C40.9802 24.2154 40.8616 22.4412 40.6181 20.6918C39.9166 15.6509 34.9562 11.5482 29.4048 11.5482C24.0109 11.5482 19.0521 15.6493 18.3491 20.6918C18.1055 22.4412 17.987 24.2154 17.9967 25.9664C18.0016 26.7776 17.8116 27.5424 17.4447 28.1772C17.0339 28.8893 16.6588 29.5814 16.3292 30.2486C15.5173 31.8897 15.4524 33.7243 16.1473 35.4118C16.839 37.0978 18.1899 38.4014 19.9484 39.0795C21.0379 39.499 22.1923 39.8489 23.6764 40.0951C23.7024 43.1388 26.2971 45.6081 29.4827 45.6081C32.6684 45.6081 35.2582 43.145 35.2891 40.1059C36.7715 39.8628 37.9211 39.5129 39.0366 39.0795C40.7902 38.3983 42.1346 37.0962 42.8231 35.4134C43.5131 33.7274 43.4482 31.8959 42.6396 30.2564ZM29.4844 42.5118C28.2065 42.5118 27.1446 41.6061 26.9547 40.4279C27.721 40.4666 28.5572 40.4867 29.4827 40.4867C30.4083 40.4867 31.2493 40.4682 32.0141 40.431C31.8225 41.6076 30.7606 42.5118 29.4844 42.5118ZM39.7997 34.2878C39.4376 35.1719 38.733 35.8546 37.8139 36.2122C35.9386 36.9399 33.8911 37.3904 29.4844 37.3904C25.1134 37.3904 23.061 36.9383 21.1678 36.2076C20.2439 35.8515 19.536 35.1688 19.1723 34.2816C18.8069 33.3945 18.8427 32.43 19.2697 31.5661C19.5717 30.9531 19.9159 30.3199 20.291 29.6681C20.9226 28.572 21.2522 27.2854 21.2441 25.9494C21.236 24.3408 21.3448 22.709 21.5672 21.1005C22.0543 17.6016 25.6427 14.6461 29.5607 14.6461C33.3212 14.6461 36.9095 17.6016 37.3983 21.1005C37.6223 22.7106 37.7311 24.3424 37.7214 25.9509C37.7133 27.2901 38.0429 28.5766 38.6745 29.6696C39.0512 30.3261 39.397 30.9624 39.7007 31.577C40.1261 32.4393 40.1618 33.4038 39.7981 34.2894L39.7997 34.2878Z"
                    fill="white"
                  />
                </svg>
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
  );
};

export default PosterCampaign;
