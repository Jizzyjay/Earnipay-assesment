import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Layer_1-2.svg";
import arrow from "../../assets/u_angle-down.svg";
import dashIcon from "../../assets/u_create-dashboard.svg";
import user from "../../assets/users.svg";
import money from "../../assets/money.svg";
import payIcon from "../../assets/credit-card.svg";
import naira from "../../assets/dollar-circle.svg";
import settingIcon from "../../assets/u_setting.svg";
import check from "../../assets/check-square.svg";
import layer from "../../assets/3-layers.svg";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname === "/" ? "/dashboard" : location.pathname
  );

  const handleLinkClick = (path: any) => {
    setActiveLink(path);
  };

  const linkClass = (path: any) => {
    return activeLink === path
      ? "bg-[#00535C] text-white rounded-lg cursor-pointer flex items-center justify-between py-2.5 px-4 text-sm"
      : "flex items-center justify-between py-2.5 px-4 text-sm cursor-pointer";
  };

  const iconClass = (path: any) => {
    return activeLink === path ? "text-white" : "";
  };

  return (
<div className="flex flex-col h-screen w-1/5 overflow-y-auto">
      <div className="flex items-center justify-start p-4">
        <img loading="lazy" src={Logo} alt="Logo" className="h-8 w-[6rem]" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <nav className="mt-1 flex flex-col gap-3">
            <div
              className={linkClass("/dashboard")}
              onClick={() => handleLinkClick("/dashboard")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={dashIcon}
                  alt="dashboard"
                  className={iconClass("/dashboard")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Dashboard
                </Link>
              </div>
              <img loading="lazy"
                src={arrow}
                alt="arrow"
                className={iconClass("/dashboard")}
              />
            </div>
            <div
              className={linkClass("/payments")}
              onClick={() => handleLinkClick("/payments")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={payIcon}
                  alt="payment"
                  className={iconClass("/payments")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Payments
                </Link>
              </div>
              <img loading="lazy" src={arrow} alt="arrow" className={iconClass("/payments")} />
            </div>
            <div
              className={linkClass("/people")}
              onClick={() => handleLinkClick("/people")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy" src={user} alt="user" className={iconClass("/people")} />
                <Link to="" className="ml-3 text-xs font-normal">
                  People
                </Link>
              </div>
              <img loading="lazy" src={arrow} alt="arrow" className={iconClass("/people")} />
            </div>
            <div
              className={linkClass("/payroll")}
              onClick={() => handleLinkClick("/payroll")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={naira}
                  alt="payment"
                  className={iconClass("/payroll")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Payroll
                </Link>
              </div>
              <img loading="lazy" src={arrow} alt="arrow" className={iconClass("/payroll")} />
            </div>
            <div
              className={linkClass("/on-demand-pay")}
              onClick={() => handleLinkClick("/on-demand-pay")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={money}
                  alt="money"
                  className={iconClass("/on-demand-pay")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  On-Demand Pay
                </Link>
              </div>
              <img loading="lazy"
                src={arrow}
                alt="arrow"
                className={iconClass("/on-demand-pay")}
              />
            </div>
          </nav>
        </div>
        <div className="mb-3">
          <nav>
            <div
              className={linkClass("/approval")}
              onClick={() => handleLinkClick("/approval")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={check}
                  alt="check"
                  className={iconClass("/approval")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Approval
                </Link>
              </div>
              <img loading="lazy" src={arrow} alt="arrow" className={iconClass("/approval")} />
            </div>
            <div
              className={linkClass("/audit-logs")}
              onClick={() => handleLinkClick("/audit-logs")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={layer}
                  alt="layer"
                  className={iconClass("/audit-logs")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Audit Logs
                </Link>
              </div>
              <img loading="lazy"
                src={arrow}
                alt="arrow"
                className={iconClass("/audit-logs")}
              />
            </div>
            <div
              className={linkClass("/settings")}
              onClick={() => handleLinkClick("/settings")}
            >
              <div className="flex flex-row items-center">
                <img loading="lazy"
                  src={settingIcon}
                  alt="setting"
                  className={iconClass("/settings")}
                />
                <Link to="" className="ml-3 text-xs font-normal">
                  Settings
                </Link>
              </div>
              <img loading="lazy" src={arrow} alt="arrow" className={iconClass("/settings")} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
