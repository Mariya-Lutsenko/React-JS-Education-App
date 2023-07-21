import "./App.css";
import React from "react";
import Header from "./components/common/Heading/Header";
import UserRoutes from "./UserRoutes";
const App = () => {
  return (
    <div>
      <Header />
      <UserRoutes />
    </div>
  );
};

export default App;
