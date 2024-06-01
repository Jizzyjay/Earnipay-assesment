import React, { useState } from "react";
import Logo from "../assets/Layer_1-2.svg";
import Button from "../component/atom/Button";
import Input from "../component/atom/Input";
import PasswordInput from "../component/atom/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[450px] h-[500px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-4">
          <img src={Logo} alt="Logo" className="self-center" />
          <p className="text-[#1A1A1A] font-bold text-2xl text-center">
            Login to Earnipay
          </p>
          <div className="flex flex-col gap-2">
            <p>Email</p>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Password</p>
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          <p className="text-[#00535C] text-right cursor-pointer">
            Forgot password?
          </p>
          <Button label="Login" className="w-full" />
          <p className="text-center">
            Don’t have an account?{" "}
            <span className="text-[#00535C] font-bold cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
