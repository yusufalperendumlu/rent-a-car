import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import { clsx } from "clsx";

import Login from "@/components/modal/Login";

const NavItemInfo = [
  {
    name: "Reservation Management",
    type: "dropdown",
    items: [
      {
        title: "Reservation Cancellation / Update",
        link: "/",
      },
      {
        title: "How Do You Book?",
        link: "/",
      },
      {
        title: "Why Should You Sign Up?",
        link: "/",
      },
      {
        title: "Contact",
        link: "/",
      },
    ],
  },
  {
    name: "Cars",
    type: "link",
    link: "/",
  },
  {
    name: "Offers",
    type: "link",
    link: "/",
  },
];

const NavItem = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const [curState, setCurState] = useState(false);

  const DropDownHandler = () => {
    setDropDown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a
            href={item.link}
            className="px-4 py-2 hover:text-white transition-all duration-500 ease-linear cursor-pointer"
          >
            {item.name}
          </a>
          <span className="text-blue-500 absolute right-0 top-0 opacity-0 transition-all duration-500 font-bold  cursor-pointer group-hover:opacity-100 group-hover:right-[90%]">
            /
          </span>
        </>
      ) : (
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setCurState(true)}
          onMouseLeave={() => setCurState(false)}
        >
          <p
            onClick={DropDownHandler}
            className={clsx(
              "flex cursor-pointer gap-x-1 items-center px-4 py-2 ",
              curState === true ? "text-white" : ""
            )}
          >
            <span className="transition-all duration-200 ease-linear">
              {item.name}
            </span>
            <IoIosArrowDown
              className={clsx(
                "transition-all duration-200 ease-linear mt-0.5 lg:mt-0",
                curState === true ? "lg:mt-2" : "lg:mt-0",
                dropDown === true ? "transform rotate-90" : "transform rotate-0"
              )}
            />
          </p>
          <div
            className={`lg:hidden transition-all duration-500 pt-4 absolute bottom-0 left-12 transform translate-y-full  w-max lg:group-hover:block z-50 opacity-100 ${
              dropDown === true ? "block" : "hidden"
            } `}
          >
            <ul className="flex flex-col z-50 bg-dark-hard lg:bg-white shadow-lg rounded-lg overflow-hidden">
              {item.items &&
                item.items.map((subItem, index) => (
                  <li
                    key={index}
                    className="border-b-[0.75px] border-slate-300"
                  >
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 hover:bg-dark-soft hover:text-white transition-all duration-300 "
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [LoginIsVisible, setLoginIsVisible] = useState(false);
  // const loginRef = useRef(null);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const loginVisibilityHandler = () => {
    setLoginIsVisible((curState) => {
      return !curState;
    });
  };

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (loginRef.current && !loginRef.current.contains(e.target)) {
  //       setLoginIsVisible(false);
  //     }
  //   };
  // });

  return (
    <section className="sticky top-0 right-0 left-0 h-fit bg-dark-light z-50">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="w-fit font-opensans font-bold text-left text-3xl text-white tracking-wider">
          re-cars
        </h1>
        <div className="lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center 
        ${navIsVisible ? "right-0" : "-right-full"}`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-hard flex flex-col lg:flex-row gap-x-8 font-semibold">
            {NavItemInfo.map((item) => {
              return <NavItem key={item.name} item={item} />;
            })}
            <div className="relative">
              <div className="flex">
                <button
                  onClick={loginVisibilityHandler}
                  className={clsx(
                    "flex items-center flex-nowrap gap-2 my-2 mx-4 hover:text-white transition-all duration-500 ease-linear relative group",
                    LoginIsVisible && "text-white"
                  )}
                >
                  <span className="">Login</span>
                  <AiOutlineLogin className="w-6 h-6" />
                  <span
                    className={clsx(
                      "text-blue-500 absolute right-0 top-0 opacity-0 transition-all duration-500 font-bold group-hover:opacity-100 group-hover:right-[100%] group-hover:mr-2 ",
                      LoginIsVisible && "opacity-100 right-[100%] mr-2"
                    )}
                  >
                    /
                  </span>
                </button>
                <div className="absolute hidden top-14 right-0 lg:block group-hover">
                  {LoginIsVisible && <Login />}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </header>
      {LoginIsVisible && (
        <div className="fixed top-0 left-0 w-full h-full  bg-black opacity-90 -z-40 transition-all duration-500 ease-linear"></div>
      )}
    </section>
  );
};

export default Header;
