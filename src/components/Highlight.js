import React from "react";

export default function Link({ children, color, link = "" }) {
  return (
    <a
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        color: "#fff",
        padding: "0.2rem",
      }}
    >
      <a href={link} style={{ textDecoration: "none", color: "#fff" }}>
        {children}
      </a>
    </a>
  );
}
