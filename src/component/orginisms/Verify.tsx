import React, { useState } from "react";
import Logo from "../../assets/Layer_1-2.svg";
import message from "../../assets/message 2.svg";
import Button from "../atom/Button";
import OTPInput from "../atom/OTPInput";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

//   const handleSubmit = () => {
//     alert(`Entered OTP: ${otp}`);
//   };

  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[450px] h-[500px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-4">
          <img src={Logo} alt="Logo" className="self-center" />
          <img src={message} alt="Message" className="self-center" />
          <div className="flex flex-col items-center text-center justify-center gap-2">
            <h3 className="font-bold text-3xl">Verify your Email</h3>
            <p className="">Enter the OTP sent to youremil@gmail.com</p>
          </div>
          <div className="w-full flex justify-center my-4">
            <OTPInput length={6} onChange={handleOtpChange} />
          </div>
          <Button
            label="Continue"
            className="w-full bg-[#00535C] text-[#FFF]"
          />
          <p className="text-center text-[#00535C] mt-4">
            Resend code in{""}
            <span className="text-[#000] pl-1 font-bold cursor-pointer">
              00:32
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
