import React, { useState } from "react";
import Input from "./common/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "./common/button";

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [hiddenPass, setHiddenPass] = useState(false);
  const [error, setError] = useState(false);
  console.log(userData);
  //get value from input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.username && !userData.password) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {error && (
        <div className="text-center text-sm text-red-600">
          پر کردن همه فیلدها الزامیست
        </div>
      )}
      <Input label="نام کاربری" onChange={handleChange} name="username" />
      <div className="relative">
        <Input
          label="رمز عبور"
          onChange={handleChange}
          name="password"
          type={`${hiddenPass ? "password" : "text"}`}
        />
        <div
          className=" absolute cursor-pointer left-2 top-9 text-2xl"
          onClick={() => setHiddenPass(!hiddenPass)}
        >
          {hiddenPass ? <FaRegEye /> : <FaRegEyeSlash />}
        </div>
      </div>
      <Button name="ورود" type="submit" className="mt-10"/>
    </form>
  );
}
