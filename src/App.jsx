import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/HomePage";
import RegisterPage from "@/pages/register/RegisterPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import CarsShow from "@/pages/carsShow/CarsShow";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rent/1" element={<CarsShow />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
