// LiveSection.tsx
import React from "react";

const LiveSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12">
      <div className="flex justify-center items-center mb-4">
      <div className="relative bg-r text-white text-xs font-light px-4 py-1 rounded-full flex items-center gap-2">
  <div className="relative w-4 h-4">
    <img src="Ellipse 8.png" alt="First Circle" className="absolute top-0 left-0 w-4 h-4" />
    <img src="Ellipse 9.png" alt="Second Circle" className="absolute top-0 left-0 w-4 h-4" />
  </div>
  Live
</div>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href="#"
          style={{ backgroundImage: "url(Rectangle2.png)" }}
          className="h-12 w-12 bg-cover grid place-items-center"
        >
          <img src="fblive.png" alt="Sibaq-2025 @fb" />
        </a>
        <a
          href="#"
          style={{ backgroundImage: "url(Rectangle2.png)" }}
          className="h-12 w-12 bg-cover grid place-items-center"
        >
          <img src="youtubelive.png" alt="Sibaq-2025 @fb" />
        </a>
      </div>
      <h2 className="pt-16 text-5xl font-medium text-black mb-2">
        Never Miss Anything
      </h2>
      <p className="pt-6 text-thin font-extralight text-3xl text-gray-500 text-center whitespace-nowrap max-w-full mb-8">
        Keep Tracking Sibaq Events and be part of the prestigious Art Fest
      </p>
      <div className="flex space-x-4 mb-8">
        <button className="flex items-center bg-g text-white py-2 px-4 rounded-full hover:bg-g transition">
          <img
            src="Calendar.svg"
            alt="Calendar Icon"
            className="w-6 h-6 mr-2"
          />
          Add to Calendar
        </button>
        <button className="flex items-center bg-b text-white py-2 px-4 rounded-full hover:bg-b transition">
          <img
            src="File.svg"
            alt="Calendar Icon"
            className="w-6 h-6 mr-2"
          />
          Download PDF
        </button>
      </div>

      <div className="pt-10 w-96 h-96 rounded-3xl shadow-xl">
        <img
          src="Whitelogo.png"
          alt="Sibaq Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default LiveSection;
