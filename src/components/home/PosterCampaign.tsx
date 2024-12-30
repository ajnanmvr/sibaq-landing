"use client";
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import html2canvas from "html2canvas";
import localFont from "next/font/local";
import Modal from "../Model";
import { CroppedArea } from "@/libs/types";

const nippo = localFont({ src: "../../fonts/nippo.ttf" });

const PosterCampaign = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CroppedArea | null>(null);
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
      scale: 3,
      useCORS: true,
      allowTaint: false,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        const link = document.createElement("a");
        if (blob) {
          link.href = URL.createObjectURL(blob);
        }
        link.download = "poster.png";
        link.click();
        URL.revokeObjectURL(link.href);
      }, "image/png");
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
      <div className="flex items-center justify-center flex-col sm:flex-row my-3 mx-2 space-y-8 sm:space-y-0 p-10 bg-white rounded-3xl w-96 sm:w-[40rem] ">
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
            Participate in <br /> Sibaq Poster Campaign
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className="py-3 px-4 mb-2 border-2 border-red-400 rounded-full my-2"
            />
            <button type="submit" className="bg-red flex items-center justify-center rounded-full py-3 text-center px-4 gap-2 text-white" > <svg xmlns="http://www.w3.org/2000/svg" className="fill-white h-4 w-4" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M8.5,5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm7.32,3.18l-.35-1.42c-.11-.44-.51-.76-.97-.76s-.86,.31-.97,.76l-.35,1.41-1.4,.32c-.45,.1-.77,.5-.77,.96,0,.46,.3,.86,.74,.98l1.43,.39,.36,1.43c.11,.44,.51,.76,.97,.76s.86-.31,.97-.76l.35-1.42,1.42-.35c.44-.11,.76-.51,.76-.97s-.31-.86-.76-.97l-1.42-.35Zm.79-3.3l1.76,.74,.7,1.75c.15,.38,.52,.63,.93,.63s.78-.25,.93-.63l.7-1.74,1.74-.7c.38-.15,.63-.52,.63-.93s-.25-.78-.63-.93l-1.74-.7-.7-1.74c-.15-.38-.52-.63-.93-.63s-.78,.25-.93,.63l-.69,1.73-1.73,.66c-.38,.14-.64,.51-.65,.92,0,.41,.23,.78,.61,.94Zm7.39,4.12v10c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0H15c.55,0,1,.45,1,1s-.45,1-1,1H5c-1.65,0-3,1.35-3,3v6.59l.56-.56c1.34-1.34,3.53-1.34,4.88,0l5.58,5.58c.54,.54,1.43,.54,1.97,0l.58-.58c1.34-1.34,3.53-1.34,4.88,0l1.56,1.56V9c0-.55,.45-1,1-1s1,.45,1,1Zm-2.24,11.17l-2.74-2.74c-.56-.56-1.48-.56-2.05,0l-.58,.58c-1.32,1.32-3.48,1.32-4.8,0l-5.58-5.58c-.56-.56-1.48-.56-2.05,0l-1.98,1.98v4.59c0,1.65,1.35,3,3,3h14c1.24,0,2.3-.75,2.76-1.83Z" /></svg> Create with your photo </button>
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
                      <div className="crop-container">
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
                      className="py-2 px-4 bg-green text-white rounded-lg mt-4 w-full"
                    >
                      Apply Crop
                    </button>
                  </div>
                )}
              </div>
            </Modal>
          </form>
          {croppedImage && (
            <div className="mt-4 flex justify-center space-x-2 flex-row text-center sm:pt-2">
              <button
                onClick={downloadPoster}
                className="px-7 py-2 bg-green text-white rounded-full flex justify-center items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512" width="15" height="15">
                  <g>
                    <path d="M188.821,377.6c37.49,37.491,98.274,37.491,135.765,0.001c0,0,0.001-0.001,0.001-0.001l68.523-68.523c12.712-12.278,13.064-32.536,0.786-45.248c-12.278-12.712-32.536-13.064-45.248-0.786c-0.267,0.257-0.529,0.52-0.786,0.786l-59.371,59.349L288,32c0-17.673-14.327-32-32-32l0,0c-17.673,0-32,14.327-32,32l0.448,290.709l-58.901-58.901c-12.712-12.278-32.97-11.926-45.248,0.786c-11.977,12.401-11.977,32.061,0,44.462L188.821,377.6z" />
                    <path d="M480,309.333c-17.673,0-32,14.327-32,32v97.941c-0.012,4.814-3.911,8.714-8.725,8.725H72.725c-4.814-0.012-8.714-3.911-8.725-8.725v-97.941c0-17.673-14.327-32-32-32s-32,14.327-32,32v97.941C0.047,479.42,32.58,511.953,72.725,512h366.549c40.146-0.047,72.678-32.58,72.725-72.725v-97.941C512,323.66,497.673,309.333,480,309.333z" />
                  </g>
                </svg>
                Download
              </button>
              <a
                className="px-[0.625rem] py-2 bg-pink-500 text-white rounded-full"
                onClick={clearPoster}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="fill-white">
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
