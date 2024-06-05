import React from 'react'
import Started from '../component/orginisms/Started'
import LoginImg from '../assets/Frame 1487626269 (1).svg'

const GetStarted = () => {
     return (
    <div className="bg-[#F9FAFB] w-full h-screen flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
      <img
        src={LoginImg}
        loading="lazy"
        alt="Illustration representing login"
        className="hidden lg:block w-full lg:w-[500px] lg:h-full xl:w-[520px] 2xl:w-[950px] object-cover"
      />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <Started />
      </div>
    </div>
  );
};

export default GetStarted