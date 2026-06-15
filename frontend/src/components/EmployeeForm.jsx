import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createEmployee,getEmployees,updateEmployee } from "../api/employeeApi";

const EmployeeFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const [employee, setEmployee] = useState({
    NAME: "",
    EMAIL: "",
    SALARY: "",
    MANAGER_ID: "",
    STATUS: "Active",
    DEPT_ID: "",
  });

  // input change
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // load single employee (edit mode)
  useEffect(() => {
    const fetchData = async () => {
      if (isEdit) {
        const res = await getEmployees(id);

        setEmployee({
          NAME: res.data.NAME || "",
          EMAIL: res.data.EMAIL || "",
          SALARY: res.data.SALARY || "",
          MANAGER_ID: res.data.MANAGER_ID || "",
          STATUS: res.data.STATUS || "Active",
          DEPT_ID: res.data.DEPT_ID || "",
        });
      }
    };

    fetchData();
  }, [id]);

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...employee,
      SALARY: parseFloat(employee.SALARY),
      DEPT_ID: parseInt(employee.DEPT_ID),
      MANAGER_ID: employee.MANAGER_ID
        ? parseInt(employee.MANAGER_ID)
        : null,
    };

    if (isEdit) {
      await updateEmployee(id, payload);
      alert("Employee Updated Successfully");
    } else {
      await createEmployee(payload);
      alert("Employee Created Successfully");
    }

    navigate("/employees");
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={formBox}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {isEdit ? "Edit Employee" : "Create Employee"}
        </h2>

        <input
          type="text"
          name="NAME"
          placeholder="Employee Name"
          value={employee.NAME}
          onChange={handleChange}
          style={input}
        />

        <input
          type="email"
          name="EMAIL"
          placeholder="Email Address"
          value={employee.EMAIL}
          onChange={handleChange}
          style={input}
        />

        <input
          type="number"
          name="SALARY"
          placeholder="Salary"
          value={employee.SALARY}
          onChange={handleChange}
          style={input}
        />

        <input
          type="number"
          name="MANAGER_ID"
          placeholder="Manager ID"
          value={employee.MANAGER_ID}
          onChange={handleChange}
          style={input}
        />

        <input
          type="number"
          name="DEPT_ID"
          placeholder="Department ID"
          value={employee.DEPT_ID}
          onChange={handleChange}
          style={input}
        />

        <select
          name="STATUS"
          value={employee.STATUS}
          onChange={handleChange}
          style={input}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit" style={button}>
          {isEdit ? "Update Employee" : "Create Employee"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeFormPage;

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
  maxWidth: "450px",
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