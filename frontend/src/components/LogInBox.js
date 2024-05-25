import React from 'react';
import BlackUBS3Keys from "../image/logo/BlackUBS3KeysLogo.png"; 

const LogInBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray"> 
            <div className="p-10 bg-white rounded-lg shadow-xl w-full max-w-xl">
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <img src={BlackUBS3Keys} alt="Logo" className="h-12" /> 
                    </div>
                    <h2 className="text-2xl font-bold text-red-600 mb-6">Connect your UBS Account</h2>
                    <form>
                        <div className="mb-4">
                            <input type="email" placeholder="Email" style={{ width: '300px' }} className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-red focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" style={{ width: '300px' }} className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-red focus:outline-none" />
                        </div>                       
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-red-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-red hover:underline">Forget Password?</a>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-red rounded-md bg-red-600 focus:outline-none focus:shadow-outline">
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogInBox;