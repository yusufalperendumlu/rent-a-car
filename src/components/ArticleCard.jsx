import { images } from "../constants";
import clsx from "clsx";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]",
        className
      )}
    >
      <img
        src={images.CharacterHead}
        alt="product"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-[30rem] hover:scale-[1.03] transition duration-200"
      />
      <div className="p-5">
        <h1 className="text-2xl font-bold text-dark-hard">
          The Best Car Rental Deals
        </h1>
        <p className="text-dark-light mt-2">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button className="flex items-center justify-center bg-red-600 text-white px-5 py-3 rounded-full mt-5">
          <span>Read More</span>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
