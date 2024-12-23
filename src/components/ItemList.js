import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/backend/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`/backend/api/items/${id}`)
        .then(() => setItems(items.filter((item) => item._id !== id)))
        .catch((err) => console.error(err));
    }
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
        <h1 style={{ margin: 0 }}>Item Manager</h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Item List</h2>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#6200ea",
                color: "white",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td style={{ padding: "10px", border: "1px solid #ddd", color: "#555" }}>{item._id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", color: "#333" }}>{item.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", color: "#555" }}>{item.description}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <button
                    onClick={() => deleteItem(item._id)}
                    style={{
                      backgroundColor: "#e53935",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "0.9em",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemList;
