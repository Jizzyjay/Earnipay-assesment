import React, { useState } from "react";
import Logo from "../../assets/Layer_1-2.svg";
import Input from "../atom/Input";
import Button from "../atom/Button";
import bar from '../../assets/barContainer.svg'

const Started = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[450px] h-[700px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-4">
          <img src={Logo} alt="Logo" className="self-center" />
          <p className="text-[#1A1A1A] font-bold text-2xl text-center">
           Let's get you started
          </p>
          <p className="text-[#00535C] text-right font-normal cursor-pointer">
            Step 1 <span className="text-[#000]"> of 2</span>
          </p>
          <img src={bar} alt="Status bar" />
          <div className="flex flex-col gap-2">
            <p>First Name</p>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Last Name</p>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Email Address</p>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Phone Number</p>
            <Input
              type="number"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your first name"
            />
          </div>
          <Button label="Continue" className="w-full" />
          <p className="text-center">
            Already have an account?{" "}
            <span className="text-[#00535C] font-bold cursor-pointer">Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Started;
