import React, { useState } from 'react';

import Buddy1 from "../image/Buddy1Image.png";
import Buddy2 from "../image/Buddy2Image.png";
import Buddy3 from "../image/Buddy3Image.png";
import Buddy4 from "../image/Buddy4Image.jpeg";
import Buddy5 from "../image/Buddy5Image.jpeg";

const images = [
    { src: Buddy1, alt: 'Person 1', name: 'John Doe', department: 'Marketing', socialMedia: '@johndoe' },
    { src: Buddy2, alt: 'Person 2', name: 'Jane Smith', department: 'Sales', socialMedia: '@janesmith' },
    { src: Buddy3, alt: 'Person 3', name: 'Alice Johnson', department: 'HR', socialMedia: '@alicejohnson' },
    { src: Buddy4, alt: 'Person 4', name: 'Bob Brown', department: 'Development', socialMedia: '@bobbrown' },
    { src: Buddy5, alt: 'Person 5', name: 'Charlie Davis', department: 'Design', socialMedia: '@charliedavis' },
    // Add more images as needed
];

function PastHighlightsGallery() {
    const [current, setCurrent] = useState(0);
    const numVisible = 3; // Number of images to show at a time
    const length = images.length;

    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + length) % length);
    };

    return (
        <div className="bg-black min-h-screen flex justify-center items-center p-4">
            <button onClick={prevSlide} className="absolute left-0 text-white z-10 m-2 p-2 cursor-pointer">&#10094;</button>
            <div className="flex space-x-4 overflow-hidden w-full justify-center items-center">
                {Array.from({ length: numVisible }).map((_, i) => {
                    const idx = (current + i) % length; // Calculate the index for wrapping around
                    const img = images[idx];
                    return (
                        <div key={idx} className="w-64 h-80 relative overflow-hidden">
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg">{img.name}</p>
                                <p className="text-gray-300">{img.department}</p>
                                <p className="text-blue-300">{img.socialMedia}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={nextSlide} className="absolute right-0 text-white z-10 m-2 p-2 cursor-pointer">&#10095;</button>
        </div>
    );
}

export default PastHighlightsGallery;