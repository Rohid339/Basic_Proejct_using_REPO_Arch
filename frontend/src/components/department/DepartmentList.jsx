import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDepartment, deleteDepartment } from "../../api/department_api";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const response = await getDepartment();
    setDepartments(response.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Department?")) return;

    await deleteDepartment(id);
    loadDepartments();
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0da38a",
            marginBottom: "20px",
          }}
        >
          Department List
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Budget</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dep, index) => (
              <tr
                key={dep.Dept_id}
                style={{
                  background: index % 2 === 0 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={tdStyle}>{dep.Dept_id}</td>
                <td style={tdStyle}>{dep.dept_name}</td>
                <td style={tdStyle}>{dep.budget}</td>

                <td style={tdStyle}>
                  <Link to={`/department/edit/${dep.Dept_id}`}>
                    <button style={editBtn}>Edit</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(dep.Dept_id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/department/create">
            <button
              style={{
                background: "#10b981",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              + Create Department
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #eee",
};

const editBtn = {
  background: "#f59e0b",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default DepartmentList;
