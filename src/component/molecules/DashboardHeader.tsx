import React, { useState, useEffect } from "react";
import search from "../../assets/search-01.svg";
import notification from "../../assets/notification-02.svg";
import arrow from "../../assets/u_angle-down.svg";
import line1 from "../../assets/Line 1.svg";
import line2 from "../../assets/Line 2.svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DashboardHeader = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "User Name");
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">
      <h1 className="text-base font-normal">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00535C] bg-[#F4F4F4] text-gray-700"
          />
          <img
            loading="lazy"
            src={search}
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img loading="lazy" src={line2} alt="line" />
        <img loading="lazy" src={notification} alt="notification" />
        <img loading="lazy" src={line1} alt="line" />
        <div className="flex flex-row gap-2 items-center">
          <img
            loading="lazy"
            src="https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_960_720.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#4A5564] font-medium">
              {userName}
            </p>
            <p className="text-xs text-[#9CA3AF] font-normal">
              {userEmail || "Loading..."}
            </p>
          </div>
          <img loading="lazy" src={arrow} alt="arrow" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
