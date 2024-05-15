import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/HomePage";
import RegisterPage from "@/pages/register/RegisterPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import CarsShow from "@/pages/carsShow/CarsShow";
import VerifyEmailPage from "@/pages/verify/VerifyEmailPage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden selection:text-white selection:bg-dark-red">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verifyEmail" element={<VerifyEmailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/listcars/:officename" element={<CarsShow />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
