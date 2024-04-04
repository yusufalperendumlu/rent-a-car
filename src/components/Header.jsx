import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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

  const DropDownHandler = () => {
    setDropDown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href={item.link} className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 absolute right-0 top-0 opacity-0 transition-all duration-500 font-bold group-hover:opacity-100 group-hover:right-[90%]">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="flex cursor-pointer gap-x-1 items-center px-4 py-2">
            <span>{item.name}</span>
            <IoIosArrowDown onClick={DropDownHandler} />
          </p>
          <div
            className={`lg:hidden transition-all duration-500 pt-4 absolute bottom-0 left-12 transform translate-y-full  w-max lg:group-hover:block z-50 opacity-100 ${
              dropDown === true ? "block" : "hidden"
            }`}
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
  //   const [profileDown, setProfileDown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky top-0 right-0 left-0 bg-dark-light z-50">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="w-20 font-opensans font-bold text-left text-3xl text-white tracking-wider">
          EBYA
        </h1>
        <div className="lg:hidden z-50">
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
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
