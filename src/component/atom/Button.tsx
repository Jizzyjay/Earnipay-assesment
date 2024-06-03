import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  imgSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  imgSrc = ""
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-3 py-3 bg-[#E2E8F0] text-[#64748B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64748B] focus:ring-opacity-75 disabled:opacity-50 ${className}`}
    >
      {imgSrc && <img src={imgSrc} alt={label} className="w-7 h-7" />}
      {label}
    </button>
  );
};

export default Button;
