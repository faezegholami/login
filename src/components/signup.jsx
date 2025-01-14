import React, { useState } from "react";
import Input from "./common/input";
import Button from "./common/button";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState(false);
  console.log(userData);
  const navigate = useNavigate()
  //get value from input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation form
    if (
      !userData.username ||
      !userData.password ||
      !userData.mobile ||
      !userData.email
    ) {
      setError(true);
    } else {
      setError(false);
       //save user information in localstorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some(
      (user) =>
        user.username === userData.username || user.mobile === userData.mobile
    );

    if (isUserExists) {
      alert("کاربری با این اطلاعات موجود است");
    }else{
        users.push({
          username: userData.username,
          password: userData.password,
          mobile: userData.mobile,
          email: userData.email,
        });
    
        localStorage.setItem('users',JSON.stringify(users))
        navigate('/dashboard')
        }
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
      <Input label="ایمیل" onChange={handleChange} name="email" />
      <Input label="موبایل" onChange={handleChange} name="mobile" />
      <Input label="رمز عبور" onChange={handleChange} name="password" />

      <Button name="ثبت نام" type="submit" className="mt-10" />
    </form>
  );
}
