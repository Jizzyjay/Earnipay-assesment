import React, { useState } from "react";
import Line from "../../assets/Line 4.svg";
import Select from "../atom/Select";
import Button from "../atom/Button";
import plus from "../../assets/plus.svg";
import send from "../../assets/send-2.svg";
import arrow from "../../assets/arrow-up.svg";
import graph from "../../assets/Frame 2147223817.svg";

const TotalBalanceCard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "option1", label: "Last 3 months" },
    { value: "option2", label: "Last 6 months" },
    { value: "option3", label: "Last 9 months" },
    { value: "option4", label: "Last 12 months" },
  ];

  const getTotalBalance = () => {
    if (selectedOption === "option2") {
      return 450000;
    }
    return 0;
  };

  return (
    <div className="bg-white rounded-xl p-4 flex flex-row justify-between">
      <div className="w-[12.6rem] lg:w-[16rem]">
        <div className="flex flex-col gap-2">
          <p className="text-[#374151] font-normal">Total balance</p>
          <p className="text-3xl font-semibold">
            ₦{getTotalBalance().toLocaleString()}
            <span className="text-base">.00</span>
          </p>
          {selectedOption === "option2" ? (
            <div className="bg-[#ECFDF3] w-full lg:w-[12.5rem] p-2 rounded-full flex flex-row gap-1">
              <img src={arrow} alt="arrow" loading="lazy" />
              <p className="text-[#027A48] text-xs font-medium">
                +23% more than last month
              </p>
            </div>
          ) : (
            <p className="bg-[#F2F4F7] w-[10rem] p-2 rounded-full text-xs">
              0% more than last month
            </p>
          )}
        </div>
        <div className="flex flex-row gap-4 pt-3">
          <Button
            label="Fund"
            imgSrc={plus}
            className="w-[200px] text-sm"
            textColor="#fff"
            bgColor="#00535C"
          />
          <Button
            label="Transfer"
            imgSrc={send}
            className="w-full text-sm"
            textColor="#00535C"
          />
        </div>
      </div>
      <div>
        <img src={Line} alt="Line" loading="lazy" />
      </div>
      <div>
        <div className="py-4 flex justify-end">
          <Select
            id="example-select"
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder=""
          />
        </div>
        {selectedOption === "option2" ? (
          <img src={graph} alt="graph" />
        ) : (
          <div className="border border-[#E5E7EB] rounded-lg">
            <div className="flex flex-col w-full lg:w-[28rem] gap-2 px-10 py-2 justify-center text-center m-auto">
              <p className="text-sm">No Data Available Yet.</p>
              <p className="text-sm">
                Your data will appear here once you complete a <br />{" "}
                transaction.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalBalanceCard;
