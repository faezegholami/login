import React, { useState } from "react";
import SignUp from "../components/signup";
import Login from "../components/login";

export default function LoginPage() {
  const [newUser, setNewUser] = useState(false);
  return (
    <div className="w-1/3 max-lg:w-1/2 max-sm:w-full mx-auto mt-10">
      <div className="flex justify-between">
        <button
          className="w-1/2 text-center py-2 bg-teal-700"
          onClick={() => setNewUser(true)}
        >
          ثبت نام
        </button>
        <button
          className="w-1/2 text-center py-2 bg-teal-700"
          onClick={() => setNewUser(false)}
        >
          ورود
        </button>
      </div>
      <div className=" min-h-96 bg-teal-500 p-10">
        {newUser ? <SignUp /> : <Login />}
      </div>
    </div>
  );
}
