import React from "react";

const TopNav = () => (
  <nav style={styles.navbar}>
    <div style={styles.logo}>MyApp</div>
    <ul style={styles.navLinks}>
      <li>Dashboard</li>
      <li>Analytics</li>
      <li>Settings</li>
    </ul>
    <div style={styles.userMenu}>User</div>
  </nav>
);

const Card = ({ title, value }) => (
  <div style={styles.card}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export const Dashboard = () => (
  <div style={styles.container}>
    {/* <TopNav /> */}
    <main style={styles.main}>
      <h1 style={styles.pageTitle}>Dashboard</h1>
      <div style={styles.grid}>
        <Card title="Users" value="1,245" />
        <Card title="Sales" value="$12,530" />
        <Card title="Conversion" value="4.7%" />
      </div>
    </main>
  </div>
);

const styles = {
  container: {
    fontFamily: "sans-serif",
    backgroundColor: "#F4F6F8",
    height: "100vh"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C3E50",
    color: "white",
    padding: "10px 20px"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0
  },
  userMenu: {
    backgroundColor: "#34495E",
    padding: "6px 12px",
    borderRadius: "6px"
  },
  main: {
    padding: "20px"
  },
  pageTitle: {
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }
};
