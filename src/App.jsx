import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./Components/Navbar";
import { HomePages } from "./Pages/Homepages/HomePages";
import { Routes, Route } from "react-router";
import { MyFooter } from "./Components/MyFooter";
import { ProjectsPage } from "./Pages/ProjectPages/ProjectsPage";
import { DetailProject } from "./Pages/ProjectPages/DetailProject";
import { AboutMe } from "./Pages/AboutMePages.jsx/AboutMe";
import { Modal } from "./Components/Modal";

function App() {
  console.log("Made By Ibnu Hasyim S");
  return (
    <div className="relative scroll-smooth">
      <div className="z-50 backdrop-filter min-h-screen bg-[#1A1A1A] backdrop-blur-lg ">
        <header>
          <Navbar />
        </header>
        <Modal />
        <main>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<DetailProject />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
