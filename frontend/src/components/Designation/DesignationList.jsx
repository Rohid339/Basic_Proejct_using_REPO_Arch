import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDesignations } from "../../api/designation_api";

function DesignationList() {
  const [designations, setDesignations] = useState([]);

  useEffect(() => {
    loadDesignations();
  }, []);

  const loadDesignations = async () => {
    const response = await getDesignations();
    setDesignations(response.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Designation?")) return;

    await deleteDesignation(id);
    loadDesignations();
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
          maxWidth: "800px",
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
            color: "#7c3aed",
            marginBottom: "20px",
          }}
        >
          Designation List
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
              <th style={thStyle}>Designation Name</th>
              {/* <th style={thStyle}>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {designations.map((desig, index) => (
              <tr
                key={desig.designation_id}
                style={{
                  background: index % 2 === 0 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={tdStyle}>{desig.designation_id}</td>
                <td style={tdStyle}>{desig.designation_name}</td>

                {/* <td style={tdStyle}>
                  <Link to={`/designation/edit/${desig.designation_id}`}>
                    <button style={editBtn}>Edit</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(desig.designation_id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td> */}
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
          <Link to="/designation/create">
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
              + Create Designation
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

export default DesignationList;