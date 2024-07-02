import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MentorGallery() {
  const [mentors, setMentors] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const numVisible = 5; // Number of mentors to show at a time

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = () => {
    axios.get('http://127.0.0.1:8000/mentors')
      .then(response => {
        setMentors(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % mentors.length);
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + mentors.length) % mentors.length);
  };

  if (isLoading) {
    return <div className="text-center"><p>Loading mentors...</p></div>;
  }

  if (error) {
    return <div className="text-center"><p>Error loading mentors.</p></div>;
  }

  return (
    <div className="w-80% min-h-[90vh] bg-black flex flex-col justify-center items-center p-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-white uppercase tracking-wider">Meet Your Mentors</h1>
        <p className="text-xl text-gray-300">Connect and get inspired!</p>
      </div>
      <button onClick={prevSlide} className="absolute left-10 text-white text-3xl z-10 m-2 p-20 cursor-pointer">&#10094;</button>
      <div className="flex overflow-hidden w-full justify-center items-center px-64">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: numVisible }).map((_, i) => {
            const idx = (current + i) % mentors.length;
            const mentor = mentors[idx];
            return (
              <div key={mentor.id} className="bg-white border border-gray-200 shadow-lg">
                <img src={`https://via.placeholder.com/400x300?text=${mentor.name}`} alt={`Mentor ${mentor.name}`} className="w-full object-cover" />
                <div className="p-5">
                  <p className="text-lg font-semibold text-gray-900">{mentor.name}</p>
                  <p className="text-sm font-semibold text-gray-700">{mentor.position} ({mentor.department})</p>
                  <p className="text-sm text-gray-600">{mentor.short_desc}</p>
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

export default MentorGallery;