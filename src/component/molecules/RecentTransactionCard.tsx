import React from "react";
import { Link } from "react-router-dom";
import box from '../../assets/Empty Box.svg'

const RecentTransactionCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Recent Transactions</h2>
        <Link to='' className="text-[#00535C] underline text-xs">
            view all
            </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-48 gap-3 pb-16">
        <img src={box} alt="box" />
        <p className="text-[#000] text-sm">No data available</p>
        <p className="text-gray-500 text-xs">Once you start transacting, it will show here.</p>
      </div>
    </div>
  );
};

export default RecentTransactionCard