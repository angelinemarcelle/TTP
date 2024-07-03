import React from 'react';

function EventCard({ event }) {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg">
      <img src={event.image} alt={event.title} className="object-cover w-full h-48 rounded-lg" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="mt-2 text-gray-600">{event.date}</p>
        <p className="mt-2">{event.location}</p>
        <p className="mt-2 text-gray-600">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;
