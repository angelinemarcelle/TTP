import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo4 = () => {
  const navigate = useNavigate();

  // Scroll to the top of the page for a smooth transition
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract the value of the selected radio button
    const frequency = event.target.elements.interactionFrequency.value;

    // Navigate to the next survey after a delay and scroll to top
    setTimeout(() => {
      scrollToTop();
      navigate('/survey5'); // Adjust the path as necessary
    }, 1500); // Delay of 1500 milliseconds before navigating
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
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">How often would you like to interact with your buddy?</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="radio" name="interactionFrequency" value="Daily" className="mr-2"/>
                Daily
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="interactionFrequency" value="Weekly" className="mr-2"/>
                Weekly
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="interactionFrequency" value="Bi-weekly" className="mr-2"/>
                Bi-weekly
              </label>
              <label className="block text-red-600">
                <input type="radio" name="interactionFrequency" value="Monthly" className="mr-2"/>
                Monthly
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo4;