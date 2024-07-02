import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios for HTTP requests




function BuddiesGallery() {
    const [buddies, setBuddies] = useState([]);
    const [current, setCurrent] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const numVisible = 5; // Number of images to show at a time

    useEffect(() => {
        fetchBuddies();
      }, []);

    const fetchBuddies = async () => {
        axios.get('http://127.0.0.1:8000/buddies')
      .then(response => {
        setBuddies(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching buddies:', error);
        setError(error);
        setIsLoading(false);
      });
  };


    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % buddies.length);
    };

    const prevSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + buddies.length) % buddies.length);
    };

    if (isLoading) {
        return <div className="text-center"><p>Loading mentors...</p></div>;
      }
    
      if (error) {
        return <div className="text-center"><p>Error loading mentors.</p></div>;
      }

      
    return (
        <div className="w-80% min-h-[70vh] bg-black flex flex-col justify-center items-center p-4">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-white uppercase tracking-wider">Meet Your Buddies</h1>
                <p className="text-xl text-gray-300">Get to know your colleagues better!</p>
            </div>
            <button onClick={prevSlide} className="absolute left-10 text-white text-3xl z-10 m-2 p-20 cursor-pointer">&#10094;</button>
            <div className="flex overflow-hidden w-full justify-center items-center px-64">
                <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: numVisible }).map((_, i) => {
                        const idx = (current + i) % buddies.length;
                        const buddy = buddies[idx] || {};
                        return (
                            <div key={idx} className="bg-white border border-gray-200 shadow-lg">
                                <img src={`${buddy.name}.png`} alt={`Buddy ${buddy.name}`} className="w-full object-cover" />
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-900">{buddy.name || 'Loading...'}</p>
                                    <p className="text-sm font-semibold text-gray-700">{buddy.role || ''}</p>
                                    <p className="text-sm text-gray-600">LinkedIn: {buddy.linkedin || ''}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button onClick={nextSlide} className="absolute right-10 text-white text-3xl z-10 m-2 p-20 cursor-pointer">&#10095;</button>
        </div>
    );
}

export default BuddiesGallery;