import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo5 = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here, you can handle the checked values. Example:
    const formData = new FormData(event.target);
    const selectedHobbies = formData.getAll('hobbies');
    console.log('Selected Hobbies:', selectedHobbies); // Process or save the data as required

    // Smooth scroll and navigation
    scrollToTop();
    setTimeout(() => {
      navigate('/survey6'); // Adjust the path as necessary
    }, 1500); // Delay of 1500 milliseconds before navigating
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">

        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>

        {/* Question Column */}
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What are your main hobbies or interests outside of work?</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="hobbies" value="Sports & Working Out" className="mr-2"/>
                Sports & Working Out
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="hobbies" value="Arts and Crafts" className="mr-2"/>
                Arts and Crafts
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="hobbies" value="Reading" className="mr-2"/>
                Reading
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="hobbies" value="Tech Gadgets" className="mr-2"/>
                Tech Gadgets
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="hobbies" value="Travel" className="mr-2"/>
                Travel
              </label>
              <label className="block text-red-600">
                <input type="checkbox" name="hobbies" value="Food & Cooking" className="mr-2"/>
                Food & Cooking
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo5;