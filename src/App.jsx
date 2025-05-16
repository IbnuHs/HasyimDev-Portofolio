import "./App.css";
import { Navbar } from "./Components/Navbar";
import { HomePages } from "./Pages/Homepages/HomePages";
import { Routes, Route } from "react-router";
import { MyFooter } from "./Components/MyFooter";

function App() {
  return (
    <div className="relative">
      <div className="z-50 backdrop-filter min-h-screen bg-[#1A1A1A] backdrop-blur-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
