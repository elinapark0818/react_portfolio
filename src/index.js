import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./route/AppRoute";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <Navbar />
        <AppRoute />
        <Footer />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>
);
