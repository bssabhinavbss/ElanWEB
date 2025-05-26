import React from "react";
import "./gallery.css";

const images = [
  "/src/assets/gallery1.jpg",
  "/src/assets/gallery2.jpg",
  "/src/assets/gallery3.jpg",
  "/src/assets/gallery4.jpg",
  "/src/assets/gallery5.jpg",
  "/src/assets/gallery6.jpg",
  "/src/assets/gallery7.jpg",
  "/src/assets/gallery8.jpg",
  "/src/assets/gallery9.jpg",
  "/src/assets/gallery10.jpg",
  "/src/assets/gallery11.jpg",
  "/src/assets/gallery12.jpg",

  // Add more images
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gallery-item item-${(index % 10) + 1}`}
          >
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;