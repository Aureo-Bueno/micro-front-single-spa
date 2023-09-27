import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export function AppRoutes() {
  return (
    <BrowserRouter basename="react-multiples">
      <Routes>
        <Route index path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </BrowserRouter>
  );
}
