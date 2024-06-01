import React, { useState } from "react";
import { ReactComponent as ShowIcon } from "../../assets/Show.svg";
import { ReactComponent as HideIcon } from "../../assets/Hide.svg";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleShowPassword();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-4 border rounded w-full focus:outline-none focus:ring-2 focus:ring-[#00535C] focus:border-transparent"
      />
      <div
        role="button"
        tabIndex={0}
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={toggleShowPassword}
        onKeyDown={handleKeyDown}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <HideIcon className="w-6 h-6 text-gray-500" />
        ) : (
          <ShowIcon className="w-4 h-4 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
