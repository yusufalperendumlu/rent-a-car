import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Corrected from Swil to Swal

import { images } from "@/constants";

import { resetPassword } from "@/services/index/users";
import { useState } from "react";
import clsx from "clsx";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const ResetPassword = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ password, passwordAgain }) => {
      return resetPassword({
        id: userState.userInfo.userId,
        password,
        passwordAgain,
      });
    },
    onSuccess: (data) => {
      Swal.fire({
        icon: "success",
        title: data.message,
      });

      navigate("/");
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      passwordAgain: "",
    },
    mode: "onChange",
  });

  const resetPasswordHandler = (data) => {
    const { password, passwordAgain } = data;
    console.log({ password, passwordAgain });
    mutate({
      id: userState.userInfo.userId,
      password,
      passwordAgain,
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="fixed inset-0 z-[-50]">
        <img
          src={images.Racer}
          alt="hero"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="bg-dark-hard bg-opacity-90 text-white p-8 rounded-md">
        <h1 className="text-2xl font-bold text-center mb-8">Reset Password</h1>
        <p className="text-sm text-center text-white opacity-80">
          You are resetting the password for:
        </p>
        <p className="text-sm text-center text-white opacity-80 mt-2 mb-4 font-semibold">
          {userState.userInfo.email}
        </p>
        <form
          onSubmit={handleSubmit(resetPasswordHandler)}
          className="flex flex-col"
        >
          <div className="mt-4">
            <label htmlFor="password" className="text-sm">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={clsx(
                "relative block w-[20rem] h-12 px-3 py-2 border-none text-white focus:text-dark-hard bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear ",
                { "bg-dark-hard": !!password },
                errors.password ? "mt-10" : "mt-2"
              )}
            />
            <span
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute ml-72 -mt-9 text-2xl rounded-e-md text-dark-red"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>
          <div className="mt-4">
            <label htmlFor="passwordAgain" className="text-sm">
              New Password Again
            </label>
            <input
              type="password"
              id="passwordAgain"
              className={clsx(
                "relative block w-full h-12 px-3 py-2 border-none text-white focus:text-dark-hard bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear ",
                { "bg-dark-hard": !!password },
                errors.password ? "mt-10" : "mt-2"
              )}
              {...register("passwordAgain", {
                required: "New Password Again is required",
                validate: (value) =>
                  value === watch("password") || "New Passwords do not match",
              })}
            />
            <div className="h-3">
              {errors.passwordAgain && (
                <p className="text-xs text-red-500">
                  {errors.passwordAgain.message}
                </p>
              )}
            </div>
            <span
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute ml-72 -mt-12 text-2xl rounded-e-md text-dark-red"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 rounded text-white disabled:bg-blue-950"
              disabled={!isValid || isLoading}
            >
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
