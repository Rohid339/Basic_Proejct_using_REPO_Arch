import { useEffect, useState } from "react";
import { getAudit } from "../../api/audit_api.js";

function AuditList() {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    loadAudits();
  }, []);

  const loadAudits = async () => {
    const response = await getAudit();
    setAudits(response.data);
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
          maxWidth: "1100px",
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
            color: "#1d4ed8",
            marginBottom: "20px",
          }}
        >
          Audit Log List
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
              <th style={thStyle}>Table Name</th>
              <th style={thStyle}>Record ID</th>
              <th style={thStyle}>Action</th>
              <th style={thStyle}>Old Value</th>
              <th style={thStyle}>New Value</th>
              <th style={thStyle}>Changed By</th>
              <th style={thStyle}>Changed At</th>
            </tr>
          </thead>

          <tbody>
            {audits.map((audit, index) => (
              <tr
                key={audit.audit_id}
                style={{
                  background: index % 2 === 0 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={tdStyle}>{audit.audit_id}</td>
                <td style={tdStyle}>{audit.table_name}</td>
                <td style={tdStyle}>{audit.record_id}</td>
                <td style={tdStyle}>{audit.action_type}</td>

                <td style={tdStyle}>
                  {audit.old_value
                    ? audit.old_value.length > 30
                      ? audit.old_value.slice(0, 30) + "..."
                      : audit.old_value
                    : "-"}
                </td>

                <td style={tdStyle}>
                  {audit.new_value
                    ? audit.new_value.length > 30
                      ? audit.new_value.slice(0, 30) + "..."
                      : audit.new_value
                    : "-"}
                </td>

                <td style={tdStyle}>{audit.changed_by}</td>
                <td style={tdStyle}>{audit.changed_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default AuditList;