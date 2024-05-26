import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { userActions } from "@/store/reducers/userReducers";

import { forgotMyPassword } from "@/services/index/users";

import { images } from "@/constants";

import MainLayout from "@/components/MainLayout";

const ForgotMyPasswordPage = () => {
  const dispacth = useDispatch();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email }) => {
      return forgotMyPassword({ email });
    },
    onSuccess: (data) => {
      dispacth(userActions.setUserInfo({ data }));
      localStorage.setItem("account", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Email sent",
        text: "We have sent you an email with a link to reset your password",
        confirmButtonText: "OK",
        confirmButtonColor: "#B22222",
      });
    },
    onError: (error) => {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send email. Please try again later.",
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
      email: "",
    },
    mode: "onChange",
  });

  const mailSendHandler = (data) => {
    const { email } = data;
    mutate({ email });
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="fixed inset-0 z-[-50]">
          <img
            src={images.McQueen2}
            alt="hero"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex items-center justify-center h-full w-[30rem]">
          <div className="bg-dark-hard bg-opacity-90 text-white p-8 rounded-md">
            <h1 className="text-2xl font-bold text-center mb-8">
              Forgot my password
            </h1>
            <p className="text-base font-light pb-8">
              Enter the email address associated with your account and
              we&apos;ll send you a link to reset your password.
            </p>
            <form
              onSubmit={handleSubmit(mailSendHandler)}
              className="flex flex-col"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="block w-full h-12 text-white focus:text-dark-hard px-3 py-2 border-none bg-dark-light rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white transition-all duration-200 ease-linear"
              />

              <div className="h-2 p-0 m-0">
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="block w-full h-12 text-white mt-6 bg-dark-hard rounded-md text-lg font-bold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-dark-red transition-all duration-200 ease-linear disabled:bg-dark-hard disabled:cursor-not-allowed"
              >
                Send email
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center">
              <p>
                Don&apos;t have an account?
                <Link
                  to={"/register"}
                  className="ml-2 text-dark-red cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotMyPasswordPage;
