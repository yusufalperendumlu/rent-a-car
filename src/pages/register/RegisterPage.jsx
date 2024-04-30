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
      <section className="container mx-auto px-5 mt-60">
        <div className="fixed inset-0 z-[-1]">
          <img
            src={images.LuigiGuido}
            alt="hero"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="w-full flex items-center justify-start  mx-auto">
          <form onSubmit={handlerSubmit}>
            <div className="flex flex-wrap gap-x-8">
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="name"
                  className={clsx(
                    "block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-[#f4f1f18e] rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                  )}
                  placeholder=""
                />
                <label
                  htmlFor="name"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-8 scale-75 top-1 left-5 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-[#f4f1f18e] rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="surname"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-8 scale-75 top-1 left-5 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Surname
                </label>
              </div>
            </div>
            <div className="relative z-0 mb-12">
              <input
                type="email"
                id="email"
                placeholder=""
                className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-[#f4f1f18e] rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-8 scale-75 top-1 left-5 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-[#f4f1f18e] rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="password"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-8 scale-75 top-1 left-5 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 mb-12">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder=""
                  className="block py-3 px-0 w-[20rem] text-lg indent-6 text-white bg-[#f4f1f18e] rounded-[4.8rem] appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-lg font-bold text-white z-10 duration-300 transform -translate-y-8 scale-75 top-1 left-5 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-focus:left-5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Confirm password
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 mb-8">
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-blue-600 peer-checked:border-transparent"
                />
                <label htmlFor="terms" className="text-white text-xs ml-2">
                  Membership Agreement, I read it, I accept it.
                </label>
              </div>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-blue-600 peer-checked:border-transparent"
                />
                <label
                  htmlFor="privacy"
                  className="text-white text-xs w-[50rem] ml-2"
                >
                  Processing of my identity, communication, customer
                  transaction, marketing, and vehicle-insurance data for the
                  purposes of tailoring the goods and services provided, based
                  on my likes, usage habits and needs, and in this regard,
                  sending commercial electronic messages such as advertisements,
                  promotions, and campaigns to my contact information, and for
                  sharing this information with the suppliers whom Otokoç
                  procures their services for these activities.
                </label>
              </div>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  id="marketing"
                  className="peer h-4 w-4 border-2 border-gray-600 rounded-md  focus:outline-none focus:ring-0 focus:border-blue-600 peer-checked:bg-blue-600 peer-checked:border-transparent"
                />
                <label
                  htmlFor="marketing"
                  className="text-white text-xs w-[50rem] ml-2"
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
                // onClick={() => reset()}
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
