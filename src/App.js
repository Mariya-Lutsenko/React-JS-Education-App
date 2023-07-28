// import { Suspense } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Heading/Header";
import UserRoutes from "./UserRoutes";
// import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      <Header />
      <UserRoutes />
      {/* </Suspense> */}
    </div>
  );
};

export default App;
