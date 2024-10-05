import React from "react";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(32,117,188,1) 0%, rgba(9,171,177,1) 28%, rgba(234,54,80,1) 56%, rgba(234,143,35,1) 94%);",
        }}
        className="h-2 w-28 rounded-lg"
      ></div>
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-white via-[#ffffffcd] to-[#fffffffa] py-10">
        <div className="bg-white  rounded-3xl shadow-xl p-10 w-3/4 flex sm:flex-row gap-6">
          <div className="sm:w-1/2 ">
            <div className="">
              <img src="image 3.png" alt="Sibaq Logo" className="h-96 " />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-black text-2xl transform translate-x-4"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name Here"
                className="w-full p-5 text-2xl bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-200"
              />
              <label
                htmlFor="email"
                className="text-black text-2xl transform translate-x-4"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-5 text-2xl bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-200"
              />
              <label
                htmlFor="message"
                className="text-black text-2xl transform translate-x-4"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type Your Message"
                className="w-full p-5 text-2xl h-28 bg-gray-50 rounded-3xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center text-xl">
              <h1>Contact via</h1>
              <div className="flex gap-1 pl-2">
                <a
                  href="#"
                  style={{ backgroundImage: "url(Bgrectangle1.png)" }}
                  className="h-12 w-12 bg-cover grid place-items-center"
                >
                  <img src="fbicon.png" alt="Sibaq-2025 @fb" />
                </a>
                <a href="#">
                  <img src="Insticon.png" alt="Sibaq-2025 @fb" />
                </a>
                <a href="#">
                  <img src="whatsappicon.png" alt="Sibaq-2025 @fb" />
                </a>
              </div>
              <div className="pl-32">
                <button className="w-28 h-10 flex items-center justify-between bg-orange-100 text-black py-2 px-6 rounded-2xl hover:bg-orange-200 transition-all">
                  <img src="paper-plane.png" alt="" className="h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
