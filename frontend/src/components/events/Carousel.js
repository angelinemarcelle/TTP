import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel() {
  const events = [
    {
      title: "Annual Company Outing",
      description: "An off-site retreat for employees to relax and bond.",
      image: "https://miro.medium.com/v2/resize:fit:1027/1*OJDRcKQB2DQmjiLK8WYaDA@2x.jpeg",
    },
    {
      title: "UBS Night",
      description: "A night of celebration and recognition for our employees.",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    },
    // Add more events if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  return (
    <div className="relative w-3/4 mx-auto mt-10 h-[600px]">
      {events.map((event, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={event.image} alt={event.title} className="object-cover w-full h-full rounded-xl" />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-white">{event.title}</h1>
            <p className="text-white">{event.description}</p>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-2xl p-2"
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-2xl p-2"
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Carousel;
