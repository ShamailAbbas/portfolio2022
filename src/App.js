import React from "react";
import Main from "../src/components/Main";
import "../src/css/main.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutpage from "./components/Aboutpage";
import Workpage from "./components/Workpage";
import Contactpage from "./components/Contactpage";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/workpage" element={<Workpage />} />
          <Route exact path="/contactpage" element={<Contactpage />} />

          <Route exact path="/aboutpage" element={<Aboutpage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
