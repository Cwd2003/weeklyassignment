import React from "react";

export default function ImageCollection() {
  const images = [
    "/images/cover1.jpg",
    "/images/cover2.jpg",
    "/images/cover3.jpg",
    "/images/cover4.jpg",
    "/images/52bars.jpg",
    "/images/chithiyan.jpg",
    "/images/hint.jpg",
    "/images/ontop.jpg",
    "/images/takeiteasy.jpg",
    "/images/wytb.jpg"
  ];

  return (
    <div>
      <h2>🖼 Extra Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px"
        }}
      >
        {images.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}
