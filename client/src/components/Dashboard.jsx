import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "./Card";

const dashboardData = {
  users: 120,
  sales: 5300,
  notifications: 5,
  messages: 12,
};

export function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(false);
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Log Out</button>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | <Link to="/login">Login</Link>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px"
            }}
          >
            <Card title="Users" value={dashboardData.users} />
            <Card title="Sales" value={`$${dashboardData.sales}`} />
            <Card title="Notifications" value={dashboardData.notifications} />
            <Card title="Messages" value={dashboardData.messages} />
          </div>

          <section style={{ marginTop: "40px" }}>
            <h2>Recent Activity</h2>
            <ul>
              <li>User John signed up</li>
              <li>Order #1234 was placed</li>
              <li>New message from Sarah</li>
              <li>System maintenance scheduled</li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
}
