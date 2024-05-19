import React from 'react';
import CEO1 from "../image/CEO1.png";
import CEO2 from "../image/CEO2.png";
import CEO3 from "../image/CEO3.png";

function ImageGallery() {
  const images = [
    { src: CEO1, name: "Name", description: "Indian man that probs worth 1B" },
    { src: CEO2, name: "Name", description: "The pit bull wanna be but lowkey richest man in the world" },
    { src: CEO3, name: "Name", description: "The lowkey Indian CEO of Google" }
  ];

  return (
    <div className="flex justify-center items-start space-x-4 bg-gray-100 py-8">
      {images.map((image, index) => (
        <div key={index} className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden max-w-sm">
          <img src={image.src} alt={`Image ${index + 1}`} className="w-[360px] h-[450px] object-cover" />
          <div className="p-4">
            <p className="text-sm font-semibold text-gray-900">{image.name}</p>
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;