import React from 'react';
import CEO1 from "../image/CEO1.png";
import CEO2 from "../image/CEO2.jpeg";
import CEO3 from "../image/CEO3.jpeg";

function MentorGallery() {
  const images = [
    { src: CEO1, name: "Satya Nadella", title: "Chief Technology Officer", description: "Satya has led the digital transformation at UBS, introducing cutting-edge technologies that not only enhance client services but also streamline internal operations. His passion for innovation and his mentorship are pivotal in shaping the tech-savvy leaders of tomorrow." },
    { src: CEO2, name: "Elena Chan", title: "Chief of Mergers and Acquisitions", description: "With a keen eye for strategic growth opportunities, Elena has successfully guided numerous high-stake negotiations, making her a key player in UBS's expansion. Her vast experience and mentorship are invaluable for those looking to excel in the complex world of corporate finance." },
    { src: CEO3, name: "Tim Cook", title: "Senior Vice President of Asset Management", description: "Tim oversees the strategic direction and growth of UBS's asset management division, blending innovative investment solutions with sustainable practices. His dedication to excellence and development of talent makes him a trusted mentor in navigating the intricacies of asset management." }
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-black py-8">
      <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white uppercase tracking-wider">Meet Your Mentors</h1>
          <p className="text-xl text-gray-300">Connect and get inspired!</p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white border border-gray-200 shadow-lg overflow-hidden w-80 h-96 m-2"> {/* Adjusted overall card size */}
            <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-2/3 object-cover" /> {/* Increased height percentage for images */}
            <div className="p-4 h-1/3 overflow-auto"> {/* Adjusted height for text content */}
              <p className="text-lg font-semibold text-gray-900">{image.name}</p>
              <p className="text-sm font-semibold text-gray-700">{image.title}</p>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorGallery;