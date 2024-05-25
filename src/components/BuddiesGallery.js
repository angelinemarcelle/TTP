import React, { useState, useEffect } from 'react';

import Buddy1 from "../image/Buddy1Image.png";
import Buddy2 from "../image/Buddy2Image.png";
import Buddy3 from "../image/Buddy3Image.png";
import Buddy4 from "../image/Buddy4Image.png";
import Buddy5 from "../image/Buddy5Image.png";
import Buddy6 from "../image/Buddy6Image.png";
import Buddy7 from "../image/Buddy7Image.png";
import Buddy8 from "../image/Buddy8Image.png";
import Buddy9 from "../image/Buddy9Image.png";
import Buddy10 from "../image/Buddy10Image.png";
import Buddy11 from "../image/Buddy11Image.png";
import Buddy12 from "../image/Buddy12Image.png";

const images = [
    { src: Buddy1, alt: 'Buddy 1', name: 'Jiwon Kim', department: 'Global Wealth Management', socialMedia: '@geewonnie' },
    { src: Buddy2, alt: 'Buddy 2', name: 'Madison Beer', department: 'Asset Management', socialMedia: '@madisonbbb' },
    { src: Buddy3, alt: 'Buddy 3', name: 'Alice Kim', department: 'Personal & Corporate Banking', socialMedia: '@kimalice1223_' },
    { src: Buddy4, alt: 'Buddy 4', name: 'Sophia Bennett', department: 'Investment Banking', socialMedia: '@s_bennett' },
    { src: Buddy5, alt: 'Buddy 5', name: 'David Sinclair', department: 'Global Wealth Management', socialMedia: '@sinclairdvd' },
    { src: Buddy6, alt: 'Buddy 6', name: 'Victoria Lee', department: 'Asset Management', socialMedia: '@l33victoria' },
    { src: Buddy7, alt: 'Buddy 7', name: 'Thomas Holland', department: 'Personal & Corporate Banking', socialMedia: '@thomholland' },
    { src: Buddy8, alt: 'Buddy 8', name: 'William Han', department: 'Investment Bank', socialMedia: '@wh5003_' },
    { src: Buddy9, alt: 'Buddy 9', name: 'Simon Kim', department: 'Global Wealth Management', socialMedia: '@simonk' },
    { src: Buddy10, alt: 'Buddy 10', name: 'Andrew Garfield', department: 'Asset Management', socialMedia: '@drew_g' },
    { src: Buddy11, alt: 'Buddy 11', name: 'Nicholas Kim', department: 'Personal & Corporate Banking', socialMedia: '@nicho_kim' },
    { src: Buddy12, alt: 'Buddy 12', name: 'Jennie Kim', department: 'Investment Bank', socialMedia: '@jennierubyjane' },
];

function BuddiesGallery() {
    const [current, setCurrent] = useState(0);
    const numVisible = 3; // Number of images to show at a time
    const length = images.length;

    // Preload images
    useEffect(() => {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }, []);

    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + length) % length);
    };

    return (
        <div className="width-80% bg-black min-h-screen flex flex-col justify-center items-center p-4">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-white uppercase tracking-wider">Meet Your Buddies</h1>
                <p className="text-xl text-gray-300">Get to know your colleagues better!</p>
            </div>
            <button onClick={prevSlide} className="absolute left-40 text-white text-3xl z-10 m-2 p-2 cursor-pointer">&#10094;</button>
            <div className="flex space-x-4 overflow-hidden w-full justify-center items-center px-12">
                {Array.from({ length: numVisible }).map((_, i) => {
                    const idx = (current + i) % length; 
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
            <button onClick={nextSlide} className="absolute right-40 text-white text-3xl z-10 m-2 p-2 cursor-pointer">&#10095;</button>
        </div>
    );
}

export default BuddiesGallery;