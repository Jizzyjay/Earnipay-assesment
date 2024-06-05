import React, { useState } from "react";
import Select from "../atom/Select";
import inIcon from "../../assets/Ellipse 6093.svg";
import outIcon from "../../assets/Ellipse 6093 (1).svg";
import Line from "../../assets/Line 4 (1).svg";
import InflowOutflowChart from "./InflowOutflowChart";
import EmptyInflowOutflow from "./EmptyInflowOutflow";

const Inflow: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "option1", label: "Daily" },
    { value: "option2", label: "Weekly" },
    { value: "option3", label: "Monthly" },
  ];

  const getPrice = (option: string) => {
    if (option === "option2") {
      return "₦19,192,293.05";
    }
    return "₦0.00";
  };

  return (
    <div className="bg-white rounded-xl p-4 my-4 shadow-md">
      <div className="flex justify-between items-center border-b-2 pb-2">
        <h2 className="text-xs font-semibold">Inflow v. Outflow</h2>
        <div className="flex justify-end">
          <Select
            id="example-select"
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder=""
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 pt-2">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <img loading="lazy" src={inIcon} alt="inflow" />
            <p className="text-[#4A5564] text-xs">Inflow</p>
          </div>
          <p className="text-[#1A202C] font-medium text-sm pl-3">{getPrice(selectedOption)}</p>
        </div>
        <img loading="lazy" src={Line} alt="Line" className="" />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <img loading="lazy" src={outIcon} alt="outflow" />
            <p className="text-[#4A5564] text-xs">Outflow</p>
          </div>
          <p className="text-[#1A202C] font-medium  text-sm pl-3">{getPrice(selectedOption)}</p>
        </div>
      </div>

      {selectedOption !== "option2" ? (
        <>
        <div className="border border-[#E5E7EB] rounded-lg mt-10">
          <div className="flex flex-col w-full lg:w-[25rem] gap-2 px-10 py-2 justify-center text-center m-auto">
            <p className="text-sm">No Data Available Yet.</p>
            <p className="text-xs">
              Your data will appear here once you complete a <br /> transaction.
            </p>
          </div>
        </div>
        <EmptyInflowOutflow />
        </>
      ) : (
        <div className="mt-10">
          <InflowOutflowChart />
        </div>
      )}
    </div>
  );
};

export default Inflow;
