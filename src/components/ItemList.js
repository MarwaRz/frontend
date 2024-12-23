import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/backend/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`/backend/api/items/${id}`)
        .then(() => setItems(items.filter((item) => item._id !== id)))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f9", fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <div style={{ backgroundColor: "#6200ea", color: "white", padding: "10px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Item Manager</h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Item List</h2>

        {/* Item Cards */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item) => (
            <li
              key={item._id}
              style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong style={{ fontSize: "1.2em", color: "#333" }}>Item Name : {item.name}</strong>
                <p style={{ margin: 0, color: "#555" }}>Item Description : {item.description}</p>
              </div>
              <button
                onClick={() => deleteItem(item._id)}
                style={{
                  backgroundColor: "#e53935",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1em",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
