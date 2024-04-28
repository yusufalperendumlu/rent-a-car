import clsx from "clsx";

const ArticleCard = ({ className, image, text, textStyle }) => {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden flex h-auto shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] gap-12",
        className
      )}
    >
      <div className="inline-block relative overflow-hidden h-full">
        <img
          src={image}
          alt="product"
          className="w-[100vh] h-[22rem] object-cover object-center hover:scale-[1.03] transition duration-200"
        />
      </div>
      <div className={clsx("w-[76rem]", textStyle)}>
        <div className="p-4 h-min flex-col items-start">
          <div className="flex items-center justify-start h-full flex-wrap ">
            <h1 className="text-2xl w-full font-bold text-dark-hard">
              The Best Car Rental Deals
            </h1>
            <h2 className="text-sm font-bold  text-red-600 mt-2">
              May 2, 2024
            </h2>
            <p className="text-dark-light mt-2 pr-12">{text}</p>
            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-full mt-5">
              <span>Read More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
