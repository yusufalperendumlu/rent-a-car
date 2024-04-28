import ArticleCard from "@/components/ArticleCard";
import { images } from "@/constants";

const Articles = () => {
  return (
    <section className="flex bg-gradient-to-t from-red-900 w-screen bg-blend-screen flex-col mx-auto px-5 py-10 mt-12 z-40">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-start justify-center">
        <ArticleCard
          image={images.CharacterHead}
          text={
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia."
          }
          textStyle="flex items-center justify-center"
          className="w-full flex-nowrap  md:w-[calc(50%-20px)] lg:w-[calc(80%-50px)]  bg-black md:bg-white lg:bg-white"
        />
        <ArticleCard
          image={images.RacePhoto}
          text={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
          className="w-full flex-wrap p-4 md:w-[calc(50%-20px)] lg:w-[calc(30%-10px)] bg-black md:bg-white lg:bg-white"
        />
        <ArticleCard
          image={images.PistonCup}
          text={
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
          className="w-full p-4 flex-nowrap md:w-[calc(50%-20px)] lg:w-[calc(49%-40px)]  bg-black md:bg-white lg:bg-white"
        />
      </div>
    </section>
  );
};

export default Articles;
