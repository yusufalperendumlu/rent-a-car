import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import { clsx } from "clsx";

import Login from "@/components/modal/Login";
import { logout } from "@/store/actions/user";

const NavItemInfo = [
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
  {
    name: "Reservation management",
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
            className={clsx(
              "px-4 py-2 hover:text-white transition-all duration-500 ease-linear cursor-pointer"
            )}
          >
            {item.name}
          </a>
          <span className="text-yellow-400 absolute right-0 top-0 opacity-0 transition-all duration-500 font-bold  cursor-pointer group-hover:opacity-100 group-hover:right-[90%]">
            🗲
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
                curState === true ? "lg:mt-2" : "lg:mt-0"
              )}
            />
          </p>
          <div
            className={`lg:hidden transition-all duration-500 pt-4 absolute bottom-0 left-0 transform translate-y-full  w-max lg:group-hover:block z-50 opacity-100 ${
              dropDown === true ? "block" : "hidden"
            } `}
          >
            <ul className="flex flex-col z-50 bg-dark-hard lg:bg-white shadow-lg rounded-lg overflow-hidden">
              {item.items &&
                item.items.map((subItem, index) => (
                  <li key={index} className=" border-slate-300">
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 text-dark-soft hover:bg-dark-soft hover:text-white transition-all duration-300 "
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      {curState && (
        <div className="fixed top-[4.5rem] left-0 w-full h-full  bg-black opacity-40 -z-40 transition-all duration-500 ease-linear"></div>
      )}
    </li>
  );
};

const Header = () => {
  const dispacth = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [LoginIsVisible, setLoginIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

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

  const logoutHandler = () => {
    dispacth(logout());
    setLoginIsVisible(false);
  };

  return (
    <section
      className={clsx(
        " w-screen h-fit z-50 transition-all bg-dark-red duration-500 ease-in",
        scrollPosition > 0 ? "fixed top-0" : "fixed  top-0 left-0 shadow-md"
      )}
    >
      <header
        className={clsx(
          "container mx-auto  py-4 flex items-center justify-between gap-x-16 transition-all duration-500 ease-in-out",
          scrollPosition > 0 ? "px-5" : "px-2"
        )}
      >
        <Link to="/">
          <h1 className="w-fit font-opensans font-bold text-left text-3xl text-white tracking-wider">
            re-cars
          </h1>
        </Link>
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
          <ul
            className={clsx(
              "items-center gap-y-5  flex flex-col lg:flex-row gap-x-4 font-semibold",
              scrollPosition > 0 ? "text-white" : "lg:text-white text-white"
            )}
          >
            {NavItemInfo.map((item) => {
              return <NavItem key={item.name} item={item} />;
            })}
            <div className="relative">
              <div className="flex">
                <span className="px-4 flex items-center justify-center">|</span>

                {userState.userInfo ? (
                  <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-3 font-semibold">
                    <div className="relative group">
                      <div className="flex flex-col items-center">
                        <p className="flex cursor-pointer gap-x-3 border-none items-center  mt-5 lg:mt-0  px-6 py-2 rounded-full text-white font-semibold hover:bg-dark-red hover:text-white transition-all duration-300">
                          <MdOutlineAccountCircle className="w-6 h-6" />

                          <span>
                            Welcome, {` ${userState.userInfo.data.firstname}`}
                          </span>
                        </p>
                        <div
                          className={clsx(
                            "lg:hidden transition-all duration-500 pt-4 absolute bottom-0 left-0 transform translate-y-full  w-[100%] lg:group-hover:block z-50 opacity-100",
                            profileDropdown ? "hidden" : "block"
                          )}
                        >
                          <ul className="flex flex-col z-50 bg-dark-hard lg:bg-white shadow-lg rounded-lg overflow-hidden ">
                            <Link
                              to={"/profile"}
                              className="hover:bg-dark-hard flex items-center justify-center hover:text-white px-4 py-2 text-white lg:text-dark-hard"
                            >
                              Profile Page
                            </Link>
                            <button
                              onClick={logoutHandler}
                              type="button"
                              className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-hard"
                            >
                              Logout
                            </button>
                            <button
                              onClick={logoutHandler}
                              type="button"
                              className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-hard"
                            >
                              <Link to="/userDelete">Profile delete</Link>
                            </button>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={loginVisibilityHandler}
                    className={clsx(
                      "flex items-center flex-nowrap gap-2 my-2 mx-4 hover:text-white transition-all duration-500 ease-linear relative group",
                      LoginIsVisible && "text-white"
                    )}
                  >
                    <span>Login</span>
                    <AiOutlineLogin className="w-6 h-6" />
                    <span
                      className={clsx(
                        "text-yellow-400 absolute right-0 top-0 opacity-0 transition-all duration-500 font-bold group-hover:opacity-100 group-hover:right-[100%] group-hover:mr-2 ",
                        LoginIsVisible && "opacity-100 right-[100%] mr-2"
                      )}
                    >
                      🗲
                    </span>
                  </button>
                )}
                {!userState.userInfo && (
                  <div className="absolute hidden top-14 right-0 lg:block group-hover">
                    {LoginIsVisible && <Login />}
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </header>
      {LoginIsVisible && !userState.userInfo ? (
        <div
          className="fixed top-[4.5rem] left-0 w-full h-full  bg-black opacity-40 -z-40 transition-all duration-500 ease-linear"
          onClick={loginVisibilityHandler}
        ></div>
      ) : null}
    </section>
  );
};

export default Header;
