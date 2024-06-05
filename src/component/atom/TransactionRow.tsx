import React from "react";
import RedImage from "../../assets/Group 1487626277.svg";
import GreenImage from "../../assets/Group 1487626277 (1).svg";

type RecentTransactionRowProps = {
  transactionStatus: "successful" | "pending";
  imgColor: "Red" | "Green" | undefined;
  amount?: string | undefined;
  date?: string | undefined;
  transactionType?: string | undefined;
  month?: string | undefined;
  time?: string | undefined;
  sign?: string | undefined;
};

const TransactionRow: React.FC<RecentTransactionRowProps> = ({
  transactionStatus,
  amount,
  date,
  transactionType,
  month,
  time,
  imgColor,
  sign,
}) => {
  const getStatusMessage = (status: "successful" | "pending") => {
    if (status === "successful") {
      return (
        <p className="bg-[#ECFDF3] text-[#027A48] text-xs p-1 rounded-lg font-semibold text-center">
          successful
        </p>
      );
    } else if (status === "pending") {
      return (
        <p className="bg-[#FFFAEB] text-[#B54708] text-xs py-1 rounded-lg font-semibold text-center">
          pending
        </p>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-row justify-between items-center pb-4">
      <div className="flex flex-row gap-3">
        <img src={imgColor === "Red" ? RedImage : GreenImage} alt="icon" loading="lazy" />
        <div>
          <p className="text-sm">{transactionType}</p>
          <p className="text-[#667085] text-xs">
            {month}, {date}, 2024 at {time}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">
          {sign}N{amount}.00
        </p>
        {getStatusMessage(transactionStatus)}
      </div>
    </div>
  );
};

export default TransactionRow;
