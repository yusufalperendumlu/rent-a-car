import { images } from "@/constants";

const CTA = () => {
  return (
    <section className="relative px-5 py-16">
      <div
        className="absolute bg-fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${images.RadiatorSprings})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container grid grid-cols-12 mx-auto py-10 mt-20 md:pb-20 lg:place-items-center">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
            Get our stories delivered From us to your inbox weekly.
          </h2>

          <p className="text-white text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
            <span className="font-bold italic text-[#ded5d5] md:not-italic ">
              Get a response tomorrow
            </span>{" "}
            if you submit by 9pm today. If we received after 9pm will get a
            response the following day.
          </p>
        </div>
        <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
          <div className="w-3/4 mx-auto relative">
            <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
            <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
            <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
              <div className="inline-block overflow-hidden">
                <img
                  src={images.Doc}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 hover:scale-[1.05] transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
