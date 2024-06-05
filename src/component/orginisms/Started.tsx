import React, { useState } from "react";
import Logo from "../../assets/Layer_1-2.svg";
import Input from "../atom/Input";
import Button from "../atom/Button";
import bar from "../../assets/barContainer.svg";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from "../../firebase/auth";

const Started = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  const handleSignUp = async () => {
    setError("");
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      await doSendEmailVerification();
      navigate("/verify/email");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const isFormFilled = firstName && lastName && email && password && phone;

  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded-md">
      <div className="bg-white w-full md:w-[450px] h-[750px] sm:w-[350px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-8">
          <img loading="lazy" src={Logo} alt="Logo" className="self-center" />
          <p className="text-[#1A1A1A] font-bold text-2xl text-center">
            Let's get you started
          </p>
          <p className="text-[#00535C] text-right font-normal cursor-pointer">
            Step 1 <span className="text-[#000]"> of 2</span>
          </p>
          <img loading="lazy" src={bar} alt="Status bar" />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex flex-col gap-2">
            <p>First Name</p>
            <Input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Last Name</p>
            <Input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Email Address</p>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Password</p>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          <div className=" w-full flex flex-col gap-2">
            <p>Phone Number</p>
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={handlePhoneChange}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <Button
            label="Continue"
            className={`w-full ${
              isFormFilled ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={handleSignUp}
            disabled={!isFormFilled}
          />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/">
              <span className="text-[#00535C] font-bold cursor-pointer">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Started;
