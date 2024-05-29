import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo2 = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [otherRole, setOtherRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    if (event.target.value !== 'Others') {
      setOtherRole(''); // Clear other role if not selected
    }
  };

  const handleOtherRoleChange = (event) => {
    setOtherRole(event.target.value);
  };

  const handleNext = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate('/survey3');
  };

  return (
    <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl overflow-hidden">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5 overflow-auto">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">Please select the option that best describes your current role at the bank:</h1>
          <form className="w-full" onSubmit={handleNext}>
            {/* Radio options here */}
            <div className="text-left inner-form w-auto mx-auto">
              {/* Iterate over roles if possible or continue with manual label inputs */}
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Operations" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Operations'}/>
                Operations
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Operations" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Operations'}/>
                Technology
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Operations" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Operations'}/>
                Finance/Accounting
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Operations" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Operations'}/>
                Management
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Operations" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Operations'}/>
                Sales/Marketing
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="role" value="Others" className="mr-2" onChange={handleRoleChange} checked={selectedRole === 'Others'}/>
                Others
              </label>
              {selectedRole === 'Others' && (
                <input 
                  type="text"
                  value={otherRole}
                  onChange={handleOtherRoleChange}
                  placeholder="Please specify your role"
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

export default SurveyNo2;