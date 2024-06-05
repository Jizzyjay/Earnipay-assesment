import React from "react";

interface SelectProps {
  id: string;
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative inline-block w-42">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-[#D0D5DD] hover:border-gray-400 px-4 py-2 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline"
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-1 px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
