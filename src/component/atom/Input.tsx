import React from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`px-4 py-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#00535C] focus:border-transparent disabled:opacity-50 ${className}`}
    />
  );
};

export default Input;
