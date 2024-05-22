import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosEye, IoIosEyeOff } from "react-icons/io";
import clsx from "clsx";

import { signIn } from "@/services/index/users";

import Swal from "sweetalert2";
import { userActions } from "@/store/reducers/userReducers";

const Login = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
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
    mutationFn: ({ email, password }) => {
      return signIn({ email, password });
    },
    onSuccess: (data) => {
      dispacth(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "OK",
      });
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <div className="flex justify-center items-center bg-white p-2 w-full rounded-md shadow-lg ">
      <div className="w-96 p-8 bg-dark-hard rounded-lg border-4 border-dark-light ">
        <h1 className="text-lg font-semibold  text-white text-left">
          Welcome,
        </h1>
        <h1 className="text-lg font-semibold  text-white text-left">
          You can log in with your{" "}
          <span className="text-red-500">Individual Account</span>
        </h1>
        <form className="mt-8" onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              E-Mail*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="E-Mail Address"
              className="mt-2 block w-full h-12 text-white focus:text-dark-hard px-3 py-2 border-none bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear"
            />
          </div>
          <div className={clsx("h-4 w-full flex")}>
            {errors.email && (
              <p className="text-red-500 text-xs -mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password*
              </label>
            </div>
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
                "relative block w-full h-12 px-3 py-2 border-none text-white focus:text-dark-hard bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear ",
                { "bg-dark-hard": !!password },
                errors.password ? "mt-10" : "mt-2"
              )}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute w-fit h-fit inset-y-[18.4rem] end-0 mr-16 text-2xl mt-3 rounded-e-md text-gray-400"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
            <div className="h-4 w-full flex">
              {errors.password && (
                <p className="text-red-500 text-xs -mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex justify-between items-center mt-8">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 checked:bg-indigo-600"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-200"
              >
                Remember me
              </label>
            </div>
            <div className="flex justify-end">
              <a
                href="/"
                className="text-xs font-light text-gray-200  transition-all duration-300 ease-in-out"
              >
                Forgot my password?
              </a>
              <IoIosArrowDown className="rotate-[270deg] text-gray-200 text-sm ml-2" />
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-8">
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-1/2 py-2 cursor-pointer border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 transition-all duration-300 ease-linear focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center bg-dark-light mt-8 rounded-sm flex-wrap p-2 ">
          <p className="p-2 text-base font-semibold text-gray-200 text-center">
            Don&apos;t have an account?{" "}
          </p>
          <span className="flex flex-nowrap items-center cursor-pointer text-red-500 hover:text-red-600 transition-all duration-300 ease-in-out">
            <Link
              to="/register"
              className="font-normal text-sm flex flex-nowrap"
            >
              Register
              <IoIosArrowDown className="rotate-[270deg] h-3 w-3 ml-1 mt-1" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
