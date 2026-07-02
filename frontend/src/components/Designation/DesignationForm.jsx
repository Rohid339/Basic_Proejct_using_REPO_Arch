import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDesignation } from "../../api/designation_api";

function DesignationForm() {
  const [designation, setDesignation] = useState({
    designation_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDesignation({
      ...designation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createDesignation(designation);
      alert("Designation created successfully!");
      navigate("/designation");
    } catch (error) {
      console.error(error);
      alert("Failed to create designation");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#7c3aed" }}>
          Create Designation
        </h2>

        <label style={labelStyle}>Designation Name</label>
        <input
          type="text"
          name="designation_name"
          value={designation.designation_name}
          onChange={handleChange}
          placeholder="Enter designation name"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </form>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};

export default DesignationForm;