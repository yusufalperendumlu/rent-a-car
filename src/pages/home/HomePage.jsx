import MainLayout from "@/components/MainLayout";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <h1 className="text-2xl font-bold text-center">Home</h1>
          <div className="mt-4">
            <p className="text-center">Welcome to the home page!</p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default HomePage;
