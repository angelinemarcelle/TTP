import React, { useState } from 'react';
import Event1Image from "../image/WomenConference.jpeg";
import Event2Image from "../image/WomenInStemImage.jpeg";

const images = [
  { src: Event1Image, alt: 'Event 1', name: 'Girl\'s Huddle' },
  { src: Event2Image, alt: 'Event 2', name: 'Annual Shareholders Meeting' }
];

function EventSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center p-5">
      <div className="relative flex justify-center items-center">
        <button onClick={prevSlide} className="absolute z-30 p-3 cursor-pointer text-white text-4xl bg-transparent left-0 ml-5">
          &#10094;
        </button>
        <div className="overflow-hidden w-full max-w-4xl h-96 rounded-[50px] shadow-lg bg-white flex justify-center items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-full h-96 flex items-center justify-center ${index === current ? 'block' : 'hidden'}`}
            >
              {/* Ensure images fill the container without distortion */}
              <img src={img.src} alt={img.alt} className="object-contain rounded-[50px] w-full h-full"/>
              <div className="absolute bottom-0 text-center w-full p-3 bg-white bg-opacity-80 text-2xl font-bold text-gray-800">
                {img.name}
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute z-30 p-10 m-10 cursor-pointer text-white text-4xl bg-transparent right-0 mr-5">
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default EventSlider;