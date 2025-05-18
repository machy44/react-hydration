// react example
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={setIsAuthenticated} />
            </PrivateRoute>
          }
        />
        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
