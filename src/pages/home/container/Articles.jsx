import { FaArrowRight } from "react-icons/fa";

import ArticleCard from "@/components/ArticleCard";

const Articles = () => {
  return (
    <section className="flex bg-gradient-to-t from-dark-hard w-screen bg-blend-screen flex-col mx-auto px-5 py-10 mt-12 z-40">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-center justify-center">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-50px)]  bg-black md:bg-white lg:bg-white" />
      </div>

      <div className="flex justify-center items-center">
        <button className="flex items-center justify-center bg-red-600 text-white px-5 py-3 rounded-full">
          <span>View All</span>
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Articles;
