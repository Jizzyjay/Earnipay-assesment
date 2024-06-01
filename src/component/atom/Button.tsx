import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-4 bg-[#E2E8F0] text-[#64748B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64748B] focus:ring-opacity-75 disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
