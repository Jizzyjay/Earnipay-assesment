import React from 'react'
import Verify from '../component/orginisms/Verify';
import LoginImg from '../assets/Frame 1487626269 (1).svg'

const VerifyEmail = () => {
   return (
    <div className="bg-[#F9FAFB] w-full h-screen flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
      <img
        src={LoginImg}
        loading="lazy"
        alt="Illustration representing login"
       className="hidden lg:block w-full lg:w-[500px] lg:h-full xl:w-[520px] 2xl:w-[950px] object-cover lazy-loading"
      />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <Verify />
      </div>
    </div>
  );
};

export default VerifyEmail