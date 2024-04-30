import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/HomePage";
import RegisterPage from "@/pages/register/RegisterPage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
