import React, { useState } from "react";
import Line from "../../assets/Line 4.svg";
import Select from "../atom/Select";
import Button from "../atom/Button";
import plus from '../../assets/plus.svg'
import send from '../../assets/send-2.svg'

const TotalBalanceCard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 flex flex-row justify-between">
      <div className="w-[16rem]">
        <div className="flex flex-col gap-2">
          <p className="text-[#374151] font-normal">Total balance</p>
          <p className="text-3xl font-semibold">
            ₦0<span className="text-base">.00</span>
          </p>
          <p className="bg-[#F2F4F7] w-[12rem] px-3 py-2 rounded-full text-sm">
            0% more than last month
          </p>
        </div>
        <div className="flex flex-row gap-4 pt-3">
          <Button label="Fund" imgSrc={plus} className="w-full bg-[#00535C] text-[#fff]" />
          <Button label="Transfer" imgSrc={send} className="w-full text-[#00535C]" />
        </div>
      </div>
      <div>
        <img src={Line} alt="Line" />
      </div>
      <div>
        <div className="py-4 flex justify-end">
          <Select
            id="example-select"
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Last 6 months"
          />
        </div>
        <div className="border border-[#E5E7EB] rounded-lg">
          <div className="flex flex-col w-[25rem] gap-2 px-10 py-2 justify-center text-center m-auto">
            <p>No Data Available Yet.</p>
            <p className="text-sm">
              Your data will appear here once you complete a <br /> transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceCard;
