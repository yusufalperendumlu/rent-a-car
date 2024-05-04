import clsx from "clsx";

import { images } from "@/constants";

import MainLayout from "@/components/MainLayout";

const RegisterPage = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Password and confirm password must be the same");
    }
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
            onSubmit={handlerSubmit}
            className="bg-[#464c4882] rounded-lg py-12 px-4 mb-20"
          >
            <div className="relative z-0 mb-12">
              <input
                type="text"
                id="name"
                className={clsx(
                  "block py-3 px-0 w-[20rem] text-lg indent-6 text-white  bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                )}
                placeholder=""
              />
              <label
                htmlFor="name"
                className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
              >
                Your name
              </label>
            </div>
            <div className="relative z-0 mb-12">
              <input
                type="text"
                id="name"
                placeholder=""
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="surname"
                className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
              >
                Surname
              </label>
            </div>

            <div className="relative z-0 mb-12">
              <input
                type="email"
                id="email"
                placeholder=""
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
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
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
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
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-dark-hard rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-10 scale-75 top-2.5 left-[1.5rem] origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-[1.5rem] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-5"
                >
                  Confirm password
                </label>
              </div>
            </div>

            <div className="w-full flex items-center justify-end mt-20">
              <button
                type="submit"
                // onClick={() => reset()}
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

export default RegisterPage;
