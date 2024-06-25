import React, { useState, useEffect } from "react";
import DashboardHeader from "../molecules/DashboardHeader";
import star from "../../assets/Star Shine.svg";
import TotalBalanceCard from "../molecules/TotalBalanceCard";
import Button from "../atom/Button";
import watch from "../../assets/Group 1487626272.svg";
import payment from "../../assets/Cash Payment.svg";
import cancel from "../../assets/Frame 1487627201.svg";
import RecentTransactionCard from "../molecules/RecentTransactionCard";
import YieldCard from "../molecules/YieldCard";
import SpentCard from "../molecules/SpentCard";
import Inflow from "../molecules/Inflow";

interface DashboardProps {
  className?: string;
}

const getCurrentTime = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${formattedDate} • ${formattedTime}`;
};

const getGreeting = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setGreeting(getGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  const transactionDetails = [
    {
      id: 1,
      transactionType: "Airtime purchase",
      month: "april",
      time: "4:50pm",
      date: "16th",
      amount: "5,000",
      imgColor: "Red" as "Green" | "Red",
      transactionStatus: "successful" as "successful" | "pending",
      sign: "-",
    },
    {
      id: 2,
      transactionType: "To Roy Gozie Unachukwu",
      month: "april",
      time: "1:24pm",
      date: "15th",
      amount: "20,400",
      imgColor: "Red" as "Green" | "Red",
      transactionStatus: "pending" as "successful" | "pending",
      sign: "-",
    },
    {
      id: 3,
      transactionType: "Electricity Purchase",
      month: "april",
      time: "4:25pm",
      date: "15th",
      amount: "20,400",
      imgColor: "Red" as "Green" | "Red",
      transactionStatus: "successful" as "successful" | "pending",
      sign: "-",
    },
    {
      id: 4,
      transactionType: "Account Top up",
      month: "april",
      time: "10:50am",
      date: "12th",
      amount: "5,000",
      imgColor: "Green" as "Red" | "Green",
      transactionStatus: "successful" as "successful" | "pending",
      sign: "+",
    },
    {
      id: 5,
      transactionType: "To Muhamed Yekini",
      month: "april",
      time: "4:50pm",
      date: "16th",
      amount: "205,000",
      imgColor: "Red" as "Green" | "Red",
      transactionStatus: "successful" as "successful" | "pending",
      sign: "-",
    },
    {
      id: 6,
      transactionType: "To Muhamed Yekini",
      month: "april",
      time: "4:50pm",
      date: "16th",
      amount: "205,000",
      imgColor: "Red" as "Green" | "Red",
      transactionStatus: "successful" as "successful" | "pending",
      sign: "-",
    },
  ];

  return (
    <div className={`w-full lg:w-4/5 bg-[#F4F4F4] ${className}`}>
      <DashboardHeader />
      <div className="px-6">
        <div className="py-6 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-medium">{`${greeting}, Laolu!`}</h3>
            <p className="text-[#718096] text-xs">{currentTime}</p>
          </div>
          <div className="hidden md:flex flex-row gap-1">
            <img loading="lazy" src={star} alt="star" />
            <h3 className="text-[#00535C] text-xs pt-1 font-medium">
              Customize Dashboard
            </h3>
          </div>
        </div>
        <TotalBalanceCard />
        <div className="bg-[#FFEFD8] hidden md:flex flex-row px-2 rounded my-5 items-center">
          <div className="flex flex-row xl:justify-between gap-[8.5rem] flex-grow">
            <div className="w-[350px] lg:w-[450px] flex flex-col gap-1">
              <div className="flex flex-row gap-3 justify-center items-center">
                <img
                  loading="lazy"
                  src={payment}
                  alt="payment"
                  className="w-12 h-12"
                />
                <div>
                  <p className="font-semibold text-sm">
                    The New On-Demand Pay Module for Businesses
                  </p>
                  <p className="text-[#4A5564] text-xs">
                    Supercharge your business and allow your employees to
                    request their wages anytime and anywhere, directly from
                    their smartphones
                  </p>
                </div>
              </div>
            </div>
            <Button
              label="Watch Video"
              imgSrc={watch}
              className="w-[140px] p-0 mt-4 h-[40px]"
              textColor="#fff"
              bgColor="#00535C"
            />
          </div>
          <div className="flex justify-end items-center mb-16 pl-5 lg:pl-7 p-2">
            <img
              src={cancel}
              alt="cancel"
              className="w-5 h-5 lg:mr-[1rem]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-2">
          <div className="w-full md:w-3/5 mb-2">
            <YieldCard />
            <Inflow />
          </div>
          <div className="w-full md:w-2/5">
            <SpentCard />
          </div>
        </div>
        <RecentTransactionCard transactionDetails={transactionDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
