import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createEmployee,updateEmployee,getEmployeeById } from "../api/employeeApi";

const EmployeeFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [employee, setEmployee] = useState({
    NAME: "",
    EMAIL: "",
    SALARY: "",
    MANAGER_ID: "",
    STATUS: "",
    DEPT_ID: "",
    designation_id: "",
  });

  // input change handler
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // LOAD DATA (EDIT)
  useEffect(() => {
    const fetchData = async () => {
      if (isEdit) {
        const res = await getEmployeeById(id);

        setEmployee({
          NAME: res.data.NAME || "",
          EMAIL: res.data.EMAIL || "",
          SALARY: res.data.SALARY || "",
          MANAGER_ID: res.data.MANAGER_ID || "",
          STATUS: res.data.STATUS || "",
          DEPT_ID: res.data.DEPT_ID || "",
          designation_id: res.data.designation_id || "",
        });
      }
    };

    fetchData();
  }, [id]);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      NAME: employee.NAME,
      EMAIL: employee.EMAIL,
      SALARY: parseFloat(employee.SALARY),
      MANAGER_ID: employee.MANAGER_ID ? Number(employee.MANAGER_ID) : null,
      STATUS: employee.STATUS,
      DEPT_ID: Number(employee.DEPT_ID),
      designation_id: Number(employee.designation_id),
    };

    try {
      if (isEdit) {
        await updateEmployee(id, payload);
        alert("Employee Updated Successfully");
      } else {
        await createEmployee(payload);
        alert("Employee Created Successfully");
      }

      navigate("/employees");
    } catch (err) {
      console.log("API ERROR:", err.response?.data || err.message);
      alert("Something went wrong");
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={formBox}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {isEdit ? "Edit Employee" : "Create Employee"}
        </h2>

        {/* NAME */}
        <input
          style={input}
          type="text"
          name="NAME"
          placeholder="Employee Name"
          value={employee.NAME}
          onChange={handleChange}
        />

        {/* EMAIL */}
        <input
          style={input}
          type="email"
          name="EMAIL"
          placeholder="Email"
          value={employee.EMAIL}
          onChange={handleChange}
        />

        {/* SALARY */}
        <input
          style={input}
          type="number"
          name="SALARY"
          placeholder="Salary"
          value={employee.SALARY}
          onChange={handleChange}
        />

        {/* MANAGER ID */}
        <input
          style={input}
          type="number"
          name="MANAGER_ID"
          placeholder="Manager ID (Optional)"
          value={employee.MANAGER_ID}
          onChange={handleChange}
        />

        {/* STATUS */}
        <input
          style={input}
          type="text"
          name="STATUS"
          placeholder="Status (ACTIVE/INACTIVE)"
          value={employee.STATUS}
          onChange={handleChange}
        />

        {/* DEPT ID */}
        <input
          style={input}
          type="number"
          name="DEPT_ID"
          placeholder="Department ID"
          value={employee.DEPT_ID}
          onChange={handleChange}
        />

        {/* DESIGNATION ID */}
        <input
          style={input}
          type="number"
          name="designation_id"
          placeholder="Designation ID"
          value={employee.designation_id}
          onChange={handleChange}
        />

        <button style={button} type="submit">
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