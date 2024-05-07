import { useState } from "react";

import { DatePicker, TimePicker } from "antd";
import { IoClose, IoChevronDown } from "react-icons/io5";

import { MdOutlineMyLocation } from "react-icons/md";

import { images } from "@/constants";

const Hero = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [coupon, setCoupon] = useState(false);

  return (
    <section className="container mx-auto flex flex-nowrap justify-between px-5 py-5 mt-60 lg:flex-row overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]">
        <img
          src={images.HeroImage}
          alt="hero"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="lg:w-1/2 z-40 ">
        <h1 className="font-roboto text-3xl text-center font-normal text-white md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Now
          <p>It&apos;s easy for you rent a car</p>
        </h1>
        <p className="text-[#ffffff] mt-4 text-center md:text-lg lg:text-base xl:text-xl lg:text-left">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
      </div>
      <div className="w-fit lg:ml-2 lg:1/2 flex items-center justify-end flex-wrap flex-col lg:mt-0 z-40">
        <div className="px-2 py-3 pr-8 bg-dark-light">
          <div className="text-nowrap text-white px-4">
            <h1>Make Your Trip</h1>
          </div>
          <div className="flex items-center justify-between py-4 px-2">
            <div className=" text-white flex flex-wrap px-4">
              <span className="bg-dark-hard px-3 py-1 rounded-full">1</span>
            </div>
            <div className="flex flex-nowrap items-center relative gap-4">
              <span className="absolute inset-y-0 -left-2  w-[2px]  bg-red-600"></span>
              <span className="relative text-wrap w-min cursor-pointer select-none text-white text-xs">
                Pick Up Office
              </span>
              <input
                type="text"
                placeholder="Select Pick Up Office"
                className="relative w-full bg-white pl-4 pr-20 py-4 border-white text-dark-hard focus:outline-none rounded-sm "
              />
              <button className="absolute inset-y-0 right-0 p-5  text-red-600">
                <span className="absolute inset-y-0 left-0 bg-slate-300 w-[1px] h-2/3 mt-2.5 "></span>
                <MdOutlineMyLocation />
              </button>
            </div>
            <div className="flex flex-nowrap items-center relative gap-4 ml-8">
              <span className="absolute inset-y-0 -left-2  w-[2px]  bg-red-600"></span>
              <span className="relative text-wrap w-min cursor-pointer select-none text-white text-xs">
                Pick Up Date
              </span>
              <div className="w-80 flex flex-nowrap ">
                <DatePicker
                  className="block w-fit px-4 py-2 mt-2  border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Date"
                  format={"MM.DD.YYYY"}
                />
                <TimePicker
                  className="block w-fit px-4 py-2 mt-2 ml-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                  selected={startTime}
                  placeholderText="Select Time"
                  onChange={(date) => setStartTime(date)}
                  needConfirm={false}
                  changeOnScroll
                  format={"h:mm A"}
                  minuteStep={15}
                  use12Hours
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-2">
            <div className=" text-white flex flex-wrap px-4">
              <span className="bg-dark-hard px-3 py-1 rounded-full">2</span>
            </div>
            <div className="flex flex-nowrap items-center relative gap-4">
              <span className="absolute inset-y-0 -left-2  w-[2px]  bg-red-600"></span>
              <span className="relative text-wrap w-min cursor-pointer select-none text-white text-xs">
                Drop Off Office
              </span>
              <input
                type="text"
                placeholder="Drop Off Office"
                className="relative w-full bg-white pl-4 pr-20 py-4 border-white text-dark-hard focus:outline-none rounded-sm "
              />
              <button className="absolute inset-y-0 right-0 p-5  text-red-600">
                <span className="absolute inset-y-0 left-0 bg-slate-300 w-[1px] h-2/3 mt-2.5 "></span>
                <MdOutlineMyLocation />
              </button>
            </div>
            <div className="flex flex-nowrap items-center relative gap-4 ml-8">
              <span className="absolute inset-y-0 -left-2  w-[2px]  bg-red-600"></span>
              <span className="relative text-wrap w-min cursor-pointer select-none text-white text-xs">
                Drop Off Date
              </span>
              <div className="w-80 flex flex-nowrap">
                <DatePicker
                  className="block w-fit px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                  selectsEnd
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  endDate={endDate}
                  startDate={startDate}
                  minDate={startDate}
                  placeholderText="Select Date"
                  format={"MM.DD.YYYY"}
                />
                <TimePicker
                  className="block w-fit px-4 py-2 mt-2 ml-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  placeholderText="Select Time"
                  needConfirm={false}
                  changeOnScroll
                  format={"h:mm A"}
                  minuteStep={15}
                  use12Hours
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-20 justify-between w-[52.4rem] bg-dark-hard px-8">
          {coupon === true ? (
            <div className="flex flex-nowrap items-center relative gap-4">
              <input
                type="text"
                placeholder="Discount number"
                className="relative w-full px-4 py-2 rounded-lg bg-white  border-white text-dark-hard focus:outline-none"
              />
              <button className="bg-red-500 px-4 py-2 rounded-md text-white font-normal">
                APPROVE
              </button>
              <button
                onClick={() => setCoupon(false)}
                className="text-white flex flex-nowrap items-center gap-2 cursor-pointer text-xs"
              >
                CANCEL
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div
              className="flex flex-nowrap items-center relative gap-4 cursor-pointer"
              onClick={() => setCoupon(true)}
            >
              <p className="text-white  uppercase text-sm">discount number</p>
              <IoChevronDown className="text-white rotate-[270deg]" />
            </div>
          )}
          <div>
            <button className="bg-red-600 text-white px-4 py-2 flex items-center rounded-md hover:bg-red-700 transition-all duration-300 ease-linear">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
