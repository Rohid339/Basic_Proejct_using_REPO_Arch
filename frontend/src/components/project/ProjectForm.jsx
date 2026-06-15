import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createProject,
  getProject,
  updateProject,
} from "../../api/project_api";

const ProjectFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  // ❌ project_id removed (AUTO INCREMENT)
  const [project, setProject] = useState({
    project_name: "",
    P_status: "",
    employee_id: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // LOAD DATA (EDIT MODE)
  useEffect(() => {
    const fetchData = async () => {
      if (isEdit) {
        const res = await getProject(id);

        setProject({
          project_name: res.data.project_name || "",
          P_status: res.data.P_status || "",
          employee_id: res.data.employee_id || "",
        });
      }
    };

    fetchData();
  }, [id]);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      project_name: project.project_name,
      P_status: project.P_status,
      employee_id: parseInt(project.employee_id),
    };

    if (isEdit) {
      await updateProject(id, payload);
      alert("Project Updated Successfully");
    } else {
      await createProject(payload);
      alert("Project Created Successfully");
    }

    navigate("/projects");
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={formBox}>
        <h2 style={{ textAlign: "center",color: "#041837", marginBottom: "20px" }}>
          {isEdit ? "Edit Project" : "Create Project"}
        </h2>

        <input
          style={input}
          type="text"
          name="project_name"
          placeholder="Project Name"
          value={project.project_name}
          onChange={handleChange}
        />

        <input
          style={input}
          type="text"
          name="P_status"
          placeholder="Status (Active / Completed)"
          value={project.P_status}
          onChange={handleChange}
        />

        <input
          style={input}
          type="number"
          name="employee_id"
          placeholder="Employee ID"
          value={project.employee_id}
          onChange={handleChange}
        />

        <button style={button} type="submit">
          {isEdit ? "Update Project" : "Create Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectFormPage;

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
  fontWeight: "bold",
};