import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import clsx from "clsx";

import { images } from "@/constants";

import { signUp } from "@/services/index/users";

import MainLayout from "@/components/MainLayout";
import Confirmed from "@/components/modal/Confirmed";

const RegisterPage = () => {
  const [isConfirmedOpen, setIsConfirmedOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ firstname, lastname, email, password }) => {
      return signUp({ firstname, lastname, email, password });
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("account", JSON.stringify(data));
      setIsConfirmedOpen(true);
    },
    onError: (error) => {
      setErrorText(error.message);
      setIsErrorOpen(true);
      toast.error("An error occurred. Please try again later.", error.message);
    },
  });

  const handleCloseConfirmed = () => {
    setIsConfirmedOpen(false);
    navigate("/");
  };

  const handleCloseError = () => {
    setIsErrorOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      marketing: false,
      terms: false,
      privacy: false,
    },

    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { firstname, lastname, email, password } = data;
    mutate({ firstname, lastname, email, password });
  };

  // const registerControl = () => {
  //   if (isValid) {
  //     navigate("/");
  //   }
  // };

  return (
    <MainLayout>
      <section className="container  mx-auto px-5 mt-52">
        <div className="fixed inset-0 z-[-50]">
          <img
            src={images.LuigiGuido}
            alt="hero"
            className="object-cover object-center h-full w-full"
          />
        </div>
        {isConfirmedOpen && (
          <Confirmed
            text="Your registration has been successfully completed"
            closeConfirmed={handleCloseConfirmed}
            src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
          />
        )}
        {isErrorOpen && (
          <Confirmed
            text={errorText}
            closeConfirmed={handleCloseError}
            src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
          />
        )}
        <div className="w-full flex items-center justify-start  mx-auto">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="bg-off-white rounded-lg py-12 px-4 mb-20"
          >
            <div className="flex flex-wrap gap-x-8">
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="firstname"
                  {...register("firstname", {
                    required: "This field is required.",
                    minLength: {
                      value: 2,
                      message: "Minimum length is 2 characters.",
                    },
                  })}
                  className={clsx(
                    "block py-3 px-0 w-[20rem] text-lg indent-6 text-white  bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                  )}
                  placeholder=""
                />
                {errors.firstname && (
                  <span className="text-red-500 text-xs">
                    {errors.firstname.message}
                  </span>
                )}
                <label
                  htmlFor="firstname"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="lastname"
                  {...register("lastname", {
                    required: "This field is required.",
                    minLength: {
                      value: 2,
                      message: "Minimum length is 2 characters.",
                    },
                  })}
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                {errors.lastname && (
                  <span className="text-red-500 text-xs">
                    {errors.lastname.message}
                  </span>
                )}
                <label
                  htmlFor="lastname"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Surname
                </label>
              </div>
            </div>
            <div className="relative z-0 mb-12">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "This field is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
                placeholder=""
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
              <label
                htmlFor="email"
                className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
              >
                Email
              </label>
            </div>
            <div className="flex flex-wrap gap-x-8">
              <div className="relative z-0 mb-12">
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "This field is required.",
                    minLength: {
                      value: 6,
                      message: "Minimum length is 6 characters.",
                    },
                  })}
                  placeholder=""
                  autoComplete="current-password"
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
                <label
                  htmlFor="password"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "This field is required.",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match.",
                  })}
                  placeholder=""
                  autoComplete="new-password"
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Confirm password
                </label>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 mb-8">
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-[#1e656d] peer-checked:border-transparent"
                  {...register("terms", {
                    required: "This field is required.",
                    validate: (value) => value === true,
                  })}
                />
                <label htmlFor="terms" className="text-dark-hard text-xs ml-2">
                  Membership Agreement, I read it, I accept it.
                </label>
              </div>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-[#1e656d] peer-checked:border-transparent"
                  {...register("privacy", {
                    required: "This field is required.",
                    validate: (value) => value === true,
                  })}
                />
                <label
                  htmlFor="privacy"
                  className="text-dark-hard text-xs w-[50rem] ml-2"
                >
                  Processing of my identity, communication, customer
                  transaction, marketing, and vehicle-insurance data for the
                  purposes of tailoring the goods and services provided, based
                  on my likes, usage habits and needs, and in this regard,
                  sending commercial electronic messages such as advertisements,
                  promotions, and campaigns to my contact information, and for
                  sharing this information with the suppliers whom Re-cars
                  procures their services for these activities.
                </label>
              </div>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="marketing"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-[#1e656d] peer-checked:border-transparent"
                  {...register("marketing", {
                    required: "This field is required.",
                    validate: (value) => value === true,
                  })}
                />
                <label
                  htmlFor="marketing"
                  className="text-dark-hard text-xs w-[50rem] ml-2"
                >
                  Processing of my identity, vehicle, location, customer
                  transaction and marketing data for the purposes of analyzing
                  my Connected Car driving and service usage performance for
                  calculating the points on the basis of driving and offering me
                  tailored vehicle insurance.{" "}
                </label>
              </div>
            </div>
            <div className="w-full flex items-center justify-end mt-20">
              <button
                type="submit"
                disabled={!isValid || isLoading}
                // onClick={registerControl}
                className="bg-dark-red text-white font-bold text-lg py-4 px-8 w-1/3 rounded-lg mb-6 hover:bg-red-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
