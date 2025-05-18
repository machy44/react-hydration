import React from "react";

export function Card({ title, value }) {
  return (
    <div
      style={{
        flex: "1 1 150px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{value}</p>
    </div>
  );
}