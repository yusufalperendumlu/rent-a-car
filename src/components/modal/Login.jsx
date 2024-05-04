import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        <form className="mt-8">
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
              placeholder="E-Mail Address"
              className="mt-2 block w-full h-12 px-3 py-2 border-none bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password*
              </label>
              <div className="flex justify-end">
                <a
                  href="/"
                  className="text-xs font-light text-gray-200  transition-all duration-300 ease-in-out"
                >
                  Forgot My Password?
                </a>
                <IoIosArrowDown className="rotate-[270deg] text-gray-200 text-sm ml-2" />
              </div>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={clsx(
                "relative mt-2 block w-full h-12 px-3 py-2 border-none bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear ",
                { "bg-white": !!password }
              )}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute -inset-y-0 end-0 mr-16 text-2xl mt-3 rounded-e-md text-gray-400"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
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
            <button
              type="submit"
              className="w-1/2 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 transition-all duration-300 ease-linear focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center bg-dark-light mt-12 rounded-sm flex-wrap p-4 ">
          <p className="p-2 text-xl font-semibold text-gray-200 text-center">
            Don&apos;t have an account?{" "}
          </p>
          <span className="flex flex-nowrap items-center cursor-pointer text-red-500 hover:text-red-600 transition-all duration-300 ease-in-out">
            <Link
              to="/register"
              className="font-normal text-lg flex flex-nowrap"
            >
              Sign up
              <IoIosArrowDown className="rotate-[270deg] ml-2 mt-1" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
