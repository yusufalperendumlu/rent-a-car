import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { images } from "@/constants";

import { getUserProfile, updateUserProfile } from "@/services/index/users";

import MainLayout from "@/components/MainLayout";
import { userActions } from "@/store/reducers/userReducers";
import Swal from "sweetalert2";
import { useEffect, useMemo } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);

  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({
      firstname,
      lastname,
      email,
      currentPassword,
      newPassword,
      newPasswordAgain,
    }) => {
      return updateUserProfile({
        firstname,
        lastname,
        email,
        currentPassword,
        newPassword,
        newPasswordAgain,
        token: userState.userInfo.token,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile updated successfully",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      newPasswordAgain: "",
    },
    values: useMemo(() => {
      return {
        firstname: profileIsLoading ? "" : profileData?.data?.firstname,
        lastname: profileIsLoading ? "" : profileData?.data?.lastname,
        email: profileIsLoading ? "" : profileData?.data?.email,
      };
    }, [
      profileData?.data.firstname,
      profileData?.data.lastname,
      profileData?.data.email,
      profileIsLoading,
    ]),

    mode: "onChange",
  });

  const submitHandler = (data) => {
    const {
      firstname,
      lastname,
      email,
      currentPassword,
      newPassword,
      newPasswordAgain,
    } = data;
    mutate({
      firstname,
      lastname,
      email,
      currentPassword,
      newPassword,
      newPasswordAgain,
    });
  };

  return (
    <MainLayout>
      <section className="container  mx-auto px-5 mt-52">
        <div className="fixed inset-0 z-[-1]">
          <img
            src={images.LuigiGuido2}
            alt="hero"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="w-full flex items-center justify-center  mx-auto">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="bg-[#464c4882] rounded-lg py-12 px-4 mb-20"
          >
            <div className="flex flex-wrap gap-x-8">
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="firstname"
                  {...register("firstname", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                  className={clsx(
                    "block py-3 px-0 w-[20rem] text-lg indent-6 text-white  bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                  )}
                />
                <label
                  htmlFor="firstname"
                  className={clsx(
                    "absolute text-lg font-bold  z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5",
                    errors.firstname ? "text-red-600" : "text-white"
                  )}
                >
                  Your name
                </label>
                {errors.name?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="lastname"
                  {...register("lastname", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "Minimum 3 characters",
                    },
                  })}
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="lastname"
                  className={clsx(
                    "absolute text-lg font-bold  z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5",
                    errors.lastname ? "text-red-600" : "text-white"
                  )}
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
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: "This field is required",
                })}
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="email"
                className={clsx(
                  "absolute text-lg font-bold  z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5",
                  errors.email ? "text-red-600" : "text-white"
                )}
              >
                Email
              </label>
            </div>
            <div className="relative z-0 mb-12">
              <input
                type="password"
                id="currentPassword"
                {...register("currentPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === watch(userState.userInfo.data.password),
                })}
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="currentPassword"
                className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
              >
                Current password
              </label>
            </div>
            <div className="flex flex-wrap gap-x-8">
              <div className="relative z-0 mb-12">
                <input
                  type="password"
                  id="newPassword"
                  {...register("newPassword", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="newPassword"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="password"
                  id="newPasswordAgain"
                  {...register("newPasswordAgain", {
                    required: "This field is required",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Passwords do not match",
                  })}
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="newPasswordAgain"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Confirm password
                </label>
              </div>
            </div>

            <div className="w-full flex items-center justify-end mt-20">
              <button
                type="submit"
                disabled={
                  !isValid || profileIsLoading || updateProfileIsLoading
                }
                className="bg-dark-red text-white font-bold text-lg py-4 px-8 w-1/3 rounded-lg mb-6 hover:bg-red-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
