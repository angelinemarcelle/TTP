import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo3 = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [otherInterest, setOtherInterest] = useState('');

  const handleInterestChange = (event) => {
    const interest = event.target.value;
    if (event.target.checked) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    }
  };

  const handleOtherInterestChange = (event) => {
    setOtherInterest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure that at least one interest is selected or specified in 'Others'
    if (selectedInterests.length > 0 || otherInterest.trim() !== '') {
      navigate('/survey4');
    } else {
      alert('Please select at least one area of interest.');
    }
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
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What are your key areas of professional development interest?</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-left inner-form w-auto mx-auto">
              {/* Checkbox inputs for selecting multiple interests */}
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Leadership Skills" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Leadership Skills')} />
                Leadership Skills
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Technical Expertise" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Technical Expertise')} />
                Technical Expertise
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Regulatory Compliance" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Regulatory Compliance')} />
                Regulatory Compliance
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Project Management" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Project Management')} />
                Project Management
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Others" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Others')} />
                Others
              </label>
              {selectedInterests.includes('Others') && (
                <input 
                  type="text"
                  value={otherInterest}
                  onChange={handleOtherInterestChange}
                  placeholder="Please specify"
                  className="block w-[50vh] p-2 border border-red-600 rounded-md mb-4"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo3;