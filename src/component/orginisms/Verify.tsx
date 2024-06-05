import React, { useState, useEffect } from "react";
import Logo from "../../assets/Layer_1-2.svg";
import message from "../../assets/message 2.svg";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [email, setEmail] = useState<string | null>("");
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerified = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          navigate("/home");
        }
      }
    };

    const interval = setInterval(checkEmailVerified, 5000);

    return () => clearInterval(interval);
  }, [auth, navigate]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email ?? "");
    }
  }, [auth]);


  return (
    <div className="bg-[#F9FAFB] h-screen flex items-center justify-center rounded">
      <div className="bg-white w-[450px] h-[500px] flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col gap-4 px-4">
          <img loading="lazy" src={Logo} alt="Logo" className="self-center" />
          <img loading="lazy" src={message} alt="Message" className="self-center" />
          <div className="flex flex-col items-center text-center justify-center gap-2">
            <h3 className="font-bold text-3xl">Verify your Email</h3>
            <p className="">verify the link sent to your emial {email}</p>
          </div>
          {/* <div className="w-full flex justify-center my-4">
            <OTPInput length={6} onChange={handleOtpChange} />
          </div> */}
          {/* <Button
            label="Continue"
            className="w-full bg-[#00535C] text-[#FFF]"
          /> */}
          {/* <p className="text-center text-[#00535C] mt-4">
            Resend code in{""}
            <span className="text-[#000] pl-1 font-bold cursor-pointer">
              00:32
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Verify;
