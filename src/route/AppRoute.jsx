import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, About, Projects, Contact } from "../page";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
