import React, { useState } from "react";
import Logo from "../../assets/Layer_1-2.svg";
import Input from "../atom/Input";
import PasswordInput from "../atom/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setError("");
    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[350px] md:w-[450px] h-[500px]  flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-4 px-4">
          <img src={Logo} alt="Logo" className="self-center" />
          <p className="text-[#1A1A1A] font-bold text-2xl text-center">
            Login to Earnipay
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
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
          <button
            className={`w-full p-3 rounded-md text-white ${
              email && password ? "bg-[#00535C]" : "bg-gray-500"
            }`}
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Login
            </button>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link to="/get/started">
              <span className="text-[#00535C] font-bold cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
