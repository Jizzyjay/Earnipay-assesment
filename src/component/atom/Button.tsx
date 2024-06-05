import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  imgSrc?: string;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  imgSrc = "",
  bgColor = "#E2E8F0",
  textColor = "#64748B",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg focus:outline-none disabled:opacity-50 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {imgSrc && <img src={imgSrc} alt={label} className="" loading="lazy" />}
      {label}
    </button>
  );
};

export default Button;
