import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { deleteUser } from "@/services/index/users";

import { images } from "@/constants";

const UserDeletePage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ userId, password }) => {
      return deleteUser(userId, password);
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your account has been successfully deleted",
        confirmButtonText: "OK",
        confirmButtonColor: "#B22222",
      }).then(() => {
        navigate("/");
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      password: "",
    },

    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { password } = data;
    mutate({ userId, password });
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
                    <span className="font-semibold">{` ${userId}`}</span>. It
                    will expire shortly, so enter your code soon.
                  </p>
                </div>
                <div className="w-full flex flex-col mt-8">
                  <label
                    htmlFor="verificationCode"
                    className="font-bold text-sm px-4 py-3"
                  >
                    Your confirmation code
                  </label>
                  <Input.Password
                    type="text"
                    name="password"
                    id="password"
                    {...register(`verificationCode`, {
                      required: "Please enter the verification code",
                      maxLength: {
                        value: 6,
                        message: "Please enter a valid verification code",
                      },
                    })}
                    variant="filled"
                    size="large"
                  />
                  {errors.password && (
                    <p className="text-red-500 px-4 py-3">
                      {errors.verificationCode.message}
                    </p>
                  )}
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

export default UserDeletePage;
