import MainLayout from "@/components/MainLayout";

import Articles from "@/pages/home/container/Articles";
import Hero from "@/pages/home/container/Hero";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Articles />
      </MainLayout>
    </div>
  );
};

export default HomePage;
