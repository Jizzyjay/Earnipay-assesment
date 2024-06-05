import React from "react";
import Lock from "../../assets/Lock.svg";
import caution from "../../assets/Vector.svg";
import Button from "../atom/Button";

const Restricted = () => {
  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[450px] h-[500px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-4">
          <img loading="lazy" src={Lock} alt="Lock" className="self-center" />
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <h3 className="font-bold text-2xl">Account Restricted</h3>
            <div className="bg-[#FEF5E7] flex flex-row gap-1 p-4 rounded">
              <img loading="lazy" src={caution} alt="caution" />
              <p className="text-sm">
                Please note that your account has been locked for security
                reasons
              </p>
            </div>
            <p className="">
              To unlock your account please contact{" "}
              <span className="text-[#00535C] font-semibold">
                customer@earnipay.com
              </span>
            </p>
          </div>
          <Button
            label="Back to Login"
            className="w-full bg-[#00535C] text-[#FFF]"
          />
        </div>
      </div>
    </div>
  );
};

export default Restricted;
