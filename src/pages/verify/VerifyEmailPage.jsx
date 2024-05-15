import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { verifyEmail, sendEmailAgain } from "@/services/index/users";
import { images } from "@/constants";

const getEmailFromLocalStorage = () => {
  const storedData = localStorage.getItem("account");
  if (storedData) {
    const accountData = JSON.parse(storedData);
    return accountData.data.email;
  }
  return "";
};

const VerifyEmailPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Verify Email";
    const emailFromStorage = getEmailFromLocalStorage();
    setUserEmail(emailFromStorage);
  }, []);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, userVerifyCode }) => {
      return verifyEmail({ email, userVerifyCode });
    },

    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Email verified",
        text: "You have successfully verified your email address",
        confirmButtonText: "OK",
        confirmButtonColor: "#B22222",
      }).then(() => {
        navigate("/");
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: userEmail,
      userVerifyCode: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { userVerifyCode } = data;
    mutate({ email: userEmail, userVerifyCode });
  };

  const { mutate: resendVerificationEmail, isLoading: isResending } =
    useMutation({
      mutationFn: () => {
        return sendEmailAgain({ email: userEmail });
      },
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Email resent",
          text: "Verification email has been resent successfully",
          confirmButtonText: "OK",
          confirmButtonColor: "#B22222",
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

  const handleResendVerificationEmail = () => {
    resendVerificationEmail();
  };

  return (
    <div className="w-full h-[60rem]">
      <div className="fixed inset-0 z-[-50]">
        <img
          src={images.Cars2England}
          alt="hero"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="bg-[#ffffffda] px-8">
          <div className="mt-8">
            <div className="flex items-center justify-center px-4 py-3 border-b-2  ">
              <h2 className="text-3xl font-light">Check your email</h2>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-wrap items-center justify-center my-12 w-[30rem]">
                <div className="text-center">
                  <p className="text-base font-light">
                    We&apos;ve sent a six-digit confirmation code to
                    <span className="font-semibold">{` ${userEmail}`}</span>. It
                    will expire shortly, so enter your code soon.
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col mt-8">
                  <label
                    htmlFor="userVerifyCode"
                    className="font-bold text-sm px-4 py-3"
                  >
                    Your confirmation code
                  </label>
                  <input
                    type="text"
                    name="userVerifyCode"
                    id="userVerifyCode"
                    {...register(`userVerifyCode`, {
                      required: "Please enter the verification code",
                      maxLength: {
                        value: 6,
                        message: "Please enter a valid verification code",
                      },
                    })}
                    maxLength={6}
                    className="w-full h-12 border-b-2 bg-transparent m-2 outline-none text-center font-semibold text-xl spin-button-none border-gray-900 focus:border-slate-800 focus:text-gray-700 text-gray-900 transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  {errors.userVerifyCode && (
                    <p className="text-red-500 px-4 py-3">
                      {errors.userVerifyCode.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center mt-8 space-x-4 text-center">
                  <p className="text-xs text-gray-500 text-center">
                    Didn&apos;t receive the code?{" "}
                    <a
                      aria-disabled={isResending}
                      onClick={handleResendVerificationEmail}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      Resend code
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end px-4 pb-12">
                <button
                  type="submit"
                  className="block w-28 py-3 mt-6 text-lg font-semibold text-white bg-red-500 rounded-md hover:bg-dark-red focus:outline-none transition-all duration-200 ease-linear cursor-pointer"
                  disabled={!isValid || isLoading}
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
