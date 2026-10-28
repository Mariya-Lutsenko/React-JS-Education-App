import { Suspense } from "react";
import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Heading/Header";
import UserRoutes from "./UserRoutes";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
// import FallingLeaves from "./components/FallingLeaves/FallingLeaves";
import Clouds from "./components/Clouds/Clouds";
import { SeasonalFX } from "seasonalfx/react";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <d>
      <Clouds />
      <SeasonalFX season="autumn" intensity="subtle" />

      <Suspense fallback={<Loader />}>
        <Header />
        <UserRoutes />
        {!isHomePage && <Footer />}
      </Suspense>
    </d>
  );
};

export default App;
