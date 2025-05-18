import React from "react";
import { useNavigate } from "react-router-dom";

export function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
