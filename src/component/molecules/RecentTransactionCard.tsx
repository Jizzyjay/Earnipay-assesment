import React, { useState } from "react";
import box from "../../assets/Empty Box.svg";
import TransactionRow from "../atom/TransactionRow";

type RecentTransactionCardProps = {
  transactionDetails: {
    id: number | undefined;
    transactionStatus: "successful" | "pending";
    imgColor?: "Red" | "Green";
    amount?: string | undefined;
    date?: string | undefined;
    transactionType?: string | undefined;
    month?: string | undefined;
    time?: string | undefined;
    sign?: string | undefined;
  }[];
};

const RecentTransactionCard: React.FC<RecentTransactionCardProps> = ({
  transactionDetails,
}) => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="bg-white rounded-xl p-4 shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Recent Transactions</h2>
        <button
          onClick={() => setViewAll(!viewAll)}
          className="text-[#00535C] underline text-xs cursor-pointer"
        >
          {viewAll ? "hide" : "view all"}
        </button>
      </div>
   
      {!viewAll ? (
        <div className="flex flex-col items-center justify-center h-48 gap-3 pb-16">
          <img src={box} alt="box" loading="lazy" />
          <p className="text-[#000] text-sm">No data available</p>
          <p className="text-gray-500 text-xs">
            Once you start transacting, it will show here.
          </p>
        </div>
      ) : (
        <div>
          {transactionDetails.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transactionStatus={transaction.transactionStatus}
              amount={transaction.amount}
              date={transaction.date}
              transactionType={transaction.transactionType}
              month={transaction.month}
              time={transaction.time}
              sign={transaction.sign}
              imgColor={transaction.imgColor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentTransactionCard;
