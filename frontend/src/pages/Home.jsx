import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "50px 40px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "10px" }}>🏢</div>

        <h1
          style={{
            marginBottom: "10px",
            color: "#1e3a8a",
            fontSize: "2.5rem",
          }}
        >
          Employee Management System
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        >
          Manage Employees, Departments & Projects in one place
        </p>

        <h2 style={{ marginBottom: "20px", color: "#334155" }}>
          Modules
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <button style={buttonStyle}>👨‍💼 Employee Management</button>
          </Link>

          <Link to="/departments" style={{ textDecoration: "none" }}>
            <button style={buttonStyle}>🏢 Department Management</button>
          </Link>

          <Link to="/projects" style={{ textDecoration: "none" }}>
            <button style={buttonStyle}>📁 Project Management</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "14px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "600",
  minWidth: "220px",
  transition: "0.3s",
};

export default Home;