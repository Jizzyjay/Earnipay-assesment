import React from "react";
import graph from "../../assets/Frame 2147223819.svg";

const YieldCard = () => {
  return (
    <div className="hidden md:flex flex-row bg-white rounded-lg my-2 pt-2 px-4 gap-10">
      <div>
        <p className="text-sm">Yield earned this month</p>
        <p className="font-bold pt-1">₦0.00</p>
      </div>
      <img src={graph} alt="graph" className="pb-2" loading="lazy" />
    </div>
  );
};

export default YieldCard;
