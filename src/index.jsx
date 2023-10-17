import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeContextProvider } from "./contexts/ModeContext";
import Home from "/src/Pages/Home/Home";
import About from "/src/Pages/About/About";
import Music from "./Pages/Music/Music";
import VisualArts from "./Pages/Visual-Arts/VisualArts";
import Architecture from "./Pages/Architecture/Architecture";
import DevProjects from "./Pages/DevProjects/DevProjects";
import Scene3D from "./components/Scene3D/Scene3D";

const App = () => {
  return (
    <>
      <ModeContextProvider>
        <BrowserRouter>
          <Scene3D />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/visual-arts" element={<VisualArts />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/dev-projects" element={<DevProjects />} />
          </Routes>
        </BrowserRouter>
      </ModeContextProvider>
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);