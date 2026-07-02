import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProject, deleteProject } from "../../api/project_api";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const response = await getProject();
    setProjects(response.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Project?")) return;

    await deleteProject(id);
    loadProjects();
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6f9", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", padding: "20px", borderRadius: "10px" }}>

        <h2 style={{ textAlign: "center", color: "#5c0773" }}>
          Project List
        </h2>

        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Employee ID</th>
              <th style={thStyle}>Is Deleted</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, index) => (
              <tr key={project.project_id} style={{ background: index % 2 ? "#fff" : "#f9fafb" }}>

                <td style={tdStyle}>{project.project_id}</td>
                <td style={tdStyle}>{project.project_name}</td>
                <td style={tdStyle}>{project.P_status}</td>
                <td style={tdStyle}>{project.employee_id}</td>

                {/* ✅ NEW FIELD */}
                <td style={tdStyle}>
                  {project.IS_DELETED ? "Yes" : "No"}
                </td>

                <td style={tdStyle}>
                  <Link to={`/project/edit/${project.project_id}`}>
                    <button style={editBtn}>Edit</button>
                  </Link>

                  <button onClick={() => handleDelete(project.project_id)} style={deleteBtn}>
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/project/create">
            <button style={{ background: "#10b981", color: "white", padding: "10px 20px" }}>
              + Create Project
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

const thStyle = { padding: "12px", border: "1px solid #ddd" };
const tdStyle = { padding: "10px", border: "1px solid #eee" };

const editBtn = {
  background: "#f59e0b",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  marginRight: "8px",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
};

export default ProjectList;