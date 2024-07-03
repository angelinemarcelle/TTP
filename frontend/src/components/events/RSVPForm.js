import React, { useState } from 'react';

function RSVPForm({ upcomingEvents }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: upcomingEvents[0]?.title || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('RSVP Data:', formData);
    // You can send this data to your backend/API
  };

  return (
    <div className="container mx-auto px-8 mt-10 mb-16">
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="event" className="mb-2 font-medium">Select Event</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
              required
            >
              {upcomingEvents.map((event, index) => (
                <option key={index} value={event.title}>{event.title}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RSVPForm;
