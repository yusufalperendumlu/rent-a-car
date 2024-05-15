import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import { listCarsByOffice } from "@/services/index/cars";
import MainLayout from "@/components/MainLayout";

const CarsShow = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  console.log(params);

  const officeName = params.officename;
  console.log(officeName);

  console.log(decodeURIComponent(officeName));

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carData = await listCarsByOffice({ officeName });
        setCars(carData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    };

    fetchCars();
  }, [officeName]);

  return (
    <MainLayout>
      <section className="mt-24  flex items-center justify-center">
        <div className="w-[80%] h-[90%] rounded-lg p-4">
          <h1 className="text-3xl font-bold text-center mb-4">Cars</h1>
          {cars && cars.data && cars.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars && (
                <div
                  className={clsx(
                    "rounded-xl overflow-hidden flex flex-col h-auto shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] gap-12"
                  )}
                >
                  {cars.data.map((car) => (
                    <>
                      <div
                        key={car.car_id}
                        className="relative flex flex-row overflow-hidden h-full"
                      >
                        <img
                          src={car.car_image}
                          alt={car.brand}
                          className="w-[100vh] h-[22rem] object-cover object-center hover:scale-[1.03] transition duration-200"
                        />
                      </div>
                      <div className="w-[76rem]">
                        <div className="p-4 h-min flex-col items-start">
                          <div className="flex items-center justify-start h-full flex-wrap ">
                            <h1 className="text-2xl w-full font-bold text-dark-hard">
                              {car.brand}
                            </h1>
                            <h2 className="text-sm font-bold  text-red-600 mt-2">
                              {car.fuel_type}
                            </h2>
                            <p className="text-dark-light mt-2 pr-12">
                              {car.gear_type}
                            </p>
                            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-full mt-5">
                              <span>{car.rental_price}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="min-h-screen">
              <p>
                {loading ? "Loading..." : "No cars available at the moment."}
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default CarsShow;
