// import React, { useState } from 'react';
// import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";


// const MentorPrompt = ({ onSubmit }) => {
//   const [request, setRequest] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(request);
//   };

//   return (
//     <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
//       <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl overflow-hidden">

//         {/* Logo Column */}
//         <div className="flex flex-col items-center justify-center w-1/4"> 
//           <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
//         </div>

//         {/* Question Column */}
//         <div className="flex flex-col w-3/4 pl-5 overflow-auto"> 
//           <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What do you look for in a mentor?</h1>
//           <form className="w-full">
//             <div className="text-left inner-form w-auto mx-auto">
//               <input 
//                 type="number" 
//                 name="years"
//                 className="w-500 p-2 border border-red-600 rounded-md"
//                 placeholder="I want a mentor that works in the Finance department and has experience in Financial Modelling"
//                 min="0"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorPrompt;