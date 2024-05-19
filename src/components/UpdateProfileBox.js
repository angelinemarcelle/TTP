import React from 'react';
import UnknownImageAvatar from "../image/UnknownImageAvatar.jpeg"


const UpdateProfileBox = () => {
    return (
        <div className="bg-white-200 p-8">
            <div className="max-w-4xl mx-auto bg-grey p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-3 gap-10">
                    {/* First Column: Name, Age, Interest Questions */}
                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Name</label>
                            <input type="text" className="w-full p-2 rounded-md shadow" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Age</label>
                            <input type="text" className="w-full p-2 rounded-md shadow" placeholder="Enter your age"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Interest</label>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Free Time Activity:</label>
                            <input type="text" placeholder="What do you like to do in your free time?" className="w-full p-2 rounded-md shadow"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Hobbies:</label>
                            <input type="text" placeholder="Do you have any hobbies?" className="w-full p-2 rounded-md shadow"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Fun Fact:</label>
                            <input type="text" placeholder="Tell us a fun fact about yourself!" className="w-full p-2 rounded-md shadow"/>
                        </div>
                    </div>

                    {/* Second Column: Username, Department, More Interests */}
                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Username</label>
                            <input type="text" className="w-full p-2 rounded-md shadow" placeholder="Choose a username"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Department</label>
                            <input type="text" className="w-full p-2 rounded-md shadow" placeholder="Your department"/>
                        </div>
                        <div>
                            <label className="block font-bold text-grey mb-1"> lll  </label>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Languages:</label>
                            <input type="text" placeholder="What languages do you speak?" className="w-full p-2 rounded-md shadow"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Origin:</label>
                            <input type="text" placeholder="Where are you from?" className="w-full p-2 rounded-md shadow"/>
                        </div>
                        <div>
                            <label className="block font-bold text-red-600 mb-1">Sports:</label>
                            <input type="text" placeholder="Do you play any sports?" className="w-full p-2 rounded-md shadow"/>
                        </div>
                    </div>

                    {/* Third Column: Avatar, Fun Fact, and Save Button */}
                    <div className="flex flex-col items-center justify-content:center h-full space-y-4">
                        <div>
                            <label className="block font-bold text-red-600 mb-1 text-center">Add an Avatar</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                <img src={UnknownImageAvatar} alt="Profile Avatar" className="w-full h-full object-cover"/>
                            </div>
                            <button className="mt-4 bg-grey text-tiny text-red-600 py-1 px-1 rounded-xl transition">Choose Image</button>
                        </div>
                            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">Save Changes</button>                        </div>
                    </div>
                </div>
            </div>
    );
};

export default UpdateProfileBox;