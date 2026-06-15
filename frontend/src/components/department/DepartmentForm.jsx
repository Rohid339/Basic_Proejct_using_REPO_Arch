import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createDepartment,
  getDepartment,
  updateDepartment,
} from "../../api/department_api";

const DepartmentFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  // ❌ Dept_id removed (AUTO INCREMENT)
  const [department, setDepartment] = useState({
    dept_name: "",
    budget: "",
  });

  const handleChange = (e) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  // LOAD DATA (EDIT MODE)
  useEffect(() => {
    const fetchData = async () => {
      if (isEdit) {
        const res = await getDepartment(id);

        setDepartment({
          dept_name: res.data.dept_name || "",
          budget: res.data.budget || "",
        });
      }
    };

    fetchData();
  }, [id]);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      dept_name: department.dept_name,
      budget: department.budget,
    };

    if (isEdit) {
      await updateDepartment(id, payload);
      alert("Department Updated Successfully");
    } else {
      await createDepartment(payload);
      alert("Department Created Successfully");
    }

    navigate("/departments");
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={formBox}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {isEdit ? "Edit Department" : "Create Department"}
        </h2>

        {/* Department Name */}
        <input
          style={input}
          type="text"
          name="dept_name"
          placeholder="Department Name"
          value={department.dept_name}
          onChange={handleChange}
        />

        {/* Budget */}
        <input
          style={input}
          type="text"
          name="budget"
          placeholder="Budget"
          value={department.budget}
          onChange={handleChange}
        />

        <button style={button} type="submit">
          {isEdit ? "Update Department" : "Create Department"}
        </button>
      </form>
    </div>
  );
};

export default DepartmentFormPage;

/* ---------- styles ---------- */

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f6f9",
};

const formBox = {
  width: "100%",
  maxWidth: "420px",
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  outline: "none",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};