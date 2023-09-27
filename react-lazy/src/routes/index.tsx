import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home").then(({ Home }) => ({ default: Home })));
const About = React.lazy(() => import("../pages/About").then(({ About }) => ({ default: About })));
const Contact = React.lazy(() => import("../pages/Contact").then(({ Contact }) => ({ default: Contact })));

export function AppRoutes() {
  return (
    <Suspense fallback={<h1>Carregando</h1>}>
      <BrowserRouter basename="react-lazy">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
