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
      Add Item
    </h1>
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
      Add
    </button>
  </form>
);
}

export default AddItem;
