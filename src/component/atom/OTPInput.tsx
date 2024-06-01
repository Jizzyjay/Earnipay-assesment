import React, { useRef, useState } from 'react';

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
  className?: string;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange, className = '' }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
      } else if (index > 0) {
        newOtp[index - 1] = '';
        inputsRef.current[index - 1]?.focus();
      }
      setOtp(newOtp);
      onChange(newOtp.join(''));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
    const newOtp = [...otp];
    for (let i = 0; i < length; i++) {
      if (pasteData[i]) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);
    onChange(newOtp.join(''));
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-[#00535C] focus:border-transparent"
        />
      ))}
    </div>
  );
};

export default OTPInput;
