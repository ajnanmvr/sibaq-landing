import React from "react";

const FooterAddress = () => {
  return (
    <div className="w-full bg-white py-10 flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-start gap-10 px-4 sm:px-0">
        
        <div className="flex flex-col gap-4">
          <img
            src="Logo.png"
            alt="Sibaq Logo"
            className="w-44 h-auto"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            Darul Huda Islamic University,
            <br />
            Hidaya Nagar, Chemmad,
            <br />
            Tirurangadi PO, Malappuram Dist.
            <br />
            Pin: 676306, Kerala, India
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" style={{backgroundImage:'url(Bgrectangle1.png)'}} className="h-12 w-12 bg-cover grid place-items-center">
              <img src="fbicon.png" alt="Sibaq-2025 @fb" />
            </a>
            <a href="#">
              <img src="Insticon.png" alt="Sibaq-2025 @fb" />
            </a>
            <a href="#">
              <img src="whatsappicon.png" alt="Sibaq-2025 @fb" />
            </a>
            <a href="#">
              <img src="Spotifyicon.png" alt="Sibaq-2025 @fb" />
            </a>
            <a href="#">
              <img src="Youtubeicon.png" alt="Sibaq-2025 @fb" />
            </a>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            © All rights reserved | Sibaq Committee 2024
          </p>
        </div>

        <div className="flex flex-col items bg-gradient-to-b from-[#f7fafc] to-[#ffffff] p-8 rounded-3xl shadow-xl max-w-md w-full">
          <div className="flex items-center flex-col justify-center gap-2 mb-4">
            <img src="Menu Icon.png" alt="Menu" className="w-8 h-8" />
            <p className="text-[35px] font-low mb-1 tracking-tighter">Never Miss Anything</p>
          </div>
          <p className="text-center font-extralight text-lr rounded-full inline px-3 ">
            Keep Tracking Sibaq Events and be part of the prestigious Art Fest
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-[70px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
          />
          <button className="w-full bg-teal-500 text-white py-3 rounded-[70px] hover:bg-teal-600 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterAddress;
