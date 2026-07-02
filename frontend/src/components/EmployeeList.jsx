import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/employeeApi";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#af9008" }}>
        Employee List
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#2563eb", color: "white" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>EMP CODE</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Salary</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Manager ID</th>
            <th style={thStyle}>Dept ID</th>
            <th style={thStyle}>Designation ID</th>
            <th style={thStyle}>Created At</th>

            {/* ✅ NEW COLUMN */}
            <th style={thStyle}>Is Deleted</th>

            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.ID}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={tdStyle}>{emp.ID}</td>
              <td style={tdStyle}>{emp.EMP_CODE}</td>
              <td style={tdStyle}>{emp.NAME}</td>
              <td style={tdStyle}>{emp.EMAIL}</td>
              <td style={tdStyle}>{emp.SALARY}</td>
              <td style={tdStyle}>{emp.STATUS}</td>
              <td style={tdStyle}>
                {emp.MANAGER_ID ? emp.MANAGER_ID : "-"}
              </td>
              <td style={tdStyle}>{emp.DEPT_ID}</td>
              <td style={tdStyle}>{emp.designation_id}</td>
              <td style={tdStyle}>
                {emp.CREATED_AT ? emp.CREATED_AT : "-"}
              </td>

              {/* ✅ NEW FIELD */}
              <td style={tdStyle}>
                {emp.IS_DELETED ? "Yes" : "No"}
              </td>

              <td style={tdStyle}>
                <Link to={`edit/${emp.ID}`}>
                  <button
                    style={{
                      backgroundColor: "#16a34a",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(emp.ID)}
                  style={{
                    backgroundColor: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/employees/create">
          <button
            style={{
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            + Create Employee
          </button>
        </Link>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "14px",
};

const tdStyle = {
  padding: "12px",
};

export default EmployeeList;