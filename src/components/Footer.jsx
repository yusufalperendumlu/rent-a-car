import {
  RiTwitterXLine,
  RiYoutubeFill,
  RiInstagramLine,
  RiFacebookCircleFill,
  RiTelegramFill,
  RiHeartFill,
} from "react-icons/ri";

import { images } from "../constants";
import clsx from "clsx";

const FooterItemInfo = [
  {
    name: "Product",
    items: [
      "Landingpage",
      "Features",
      "Documentation",
      "Referral Program",
      "Pricing",
    ],
    position: "top",
  },
  {
    name: "Services",
    items: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"],
    position: "top",
  },
  {
    name: "Company",
    items: ["About", "Terms", "Privacy Policy", "Careers"],
    position: "down-left",
  },
  {
    name: "More",
    items: ["Documentation", "License", "Changelog"],
    position: "down-right",
  },
];

const FooterItem = ({ item }) => {
  return (
    <div
      className={clsx(
        "col-span-5 md:col-span-4 lg:col-span-2",
        item.position === "down-left" &&
          "md:col-start-5 lg:col-start-auto lg:col-span-2"
      )}
    >
      <h3 className="text-dark-light font-bold lg:text-lg">{item.name}</h3>
      <ul className="text-[#959EAD] text-sm mt-5 space-y-4 lg:text-base">
        {item.items.map((item, index) => (
          <li key={index}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 pb-12 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        {FooterItemInfo.map((item, index) => {
          return <FooterItem key={index} item={item} />;
        })}
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img src={images.DocFooter} alt="logo" className="mx-auto md:mx-0" />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <RiTwitterXLine className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <RiYoutubeFill className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <RiInstagramLine className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <RiFacebookCircleFill className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <RiTelegramFill className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <RiHeartFill className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
