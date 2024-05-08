import { useQuery } from "@tanstack/react-query";
import { listCarsByOffice } from "@/services/index/cars";
import MainLayout from "@/components/MainLayout";

const CarsShow = ({ officename }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["officename", officename],
    queryFn: () => listCarsByOffice(officename),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  console.log(data);

  return (
    <MainLayout>
      <div className="w-screen container my-20">
        <div className="mt-28">
          <div className="w-[21rem] h-[30rem] bg-[#858987]">
            <div>
              <h2>Cars for {officename}</h2>
              <ul>
                {data.map((car) => (
                  <li key={car.id}>{car.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CarsShow;
