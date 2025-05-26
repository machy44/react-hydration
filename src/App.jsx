import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    // <Dashboard/>
  );
};

export default App;
