import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/backend/api/items", { name, description })
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f9", fontFamily: "Arial, sans-serif" }}>
    {/* Navbar */}
    <div
      style={{
        backgroundColor: "#6200ea",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>Task Manager</h1>
    </div>
    <form
    onSubmit={handleSubmit}
    style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    }}
  >
    <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>
      Add Task
    </h1>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1em",
            }}
          >
            Back to list
          </button>
          <h2 style={{ textAlign: "center", color: "#333", margin: 0 }}>Task List</h2>
        </div>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
    />
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
    />
    <button
      type="submit"
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Add Task
    </button>
  </form></div>
);
}

export default AddItem;
