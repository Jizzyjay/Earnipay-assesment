import React from "react";
import DashboardHeader from "../molecules/DashboardHeader";
import star from "../../assets/Star Shine.svg";
import TotalBalanceCard from "../molecules/TotalBalanceCard";
import Button from "../atom/Button";
import watch from "../../assets/Group 1487626272.svg";
import payment from "../..//assets/Cash Payment.svg";
import cancel from '../../assets/Frame 1487627201.svg'
import RecentTransactionCard from "../molecules/RecentTransactionCard";
import YieldCard from "../molecules/YieldCard";

const Dashboard = () => {
  return (
    <div className="w-4/5 bg-[#F4F4F4] overflow-scroll">
      <DashboardHeader />
      <div className="px-6">
        <div className="py-6 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Good morning, Laolu!</h3>
            <p className="text-[#718096] text-sm">Apr 16, 2024 • 12:35 pm</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={star} alt="star" />
            <h3 className="text-[#00535C] text-base font-medium">
              Customize Dashboard
            </h3>
          </div>
        </div>
        <TotalBalanceCard />
       <div className="bg-[#FFEFD8] flex flex-row p-4 rounded my-6 items-center">
      <div className="flex flex-row gap-3 flex-grow">
        <img src={payment} alt="payment" className="w-12 h-12" />
        <div className="w-[550px] flex flex-col gap-3">
          <p className="font-semibold text-sm">
            The New On-Demand Pay Module for Businesses
          </p>
          <p className="text-[#4A5564] text-xs">
            Supercharge your business and allow your employees to request their
            wages anytime and anywhere, directly from their smartphones
          </p>
        </div>
        <Button
          label="Watch Video"
          imgSrc={watch}
          className="bg-[#00535C] text-[#fff] w-[30%] p-0 mt-4"
        />
      </div>
      <div className="flex justify-end items-center mb-16 pl-7">
        <img src={cancel} alt="cancel" className="w-8 h-8" />
      </div>
    </div>
    <div className="flex flex-row gap-x-4">
      <div>
          <YieldCard />
            <YieldCard />
      </div>
  <YieldCard />
</div>
    <RecentTransactionCard
/>


      </div>
    </div>
  );
};

export default Dashboard;
