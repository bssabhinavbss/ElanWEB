import React from "react";
import "./gallery.css";

import g1 from '/src/assets/gallery1.jpg';
import g2 from '/src/assets/gallery2.jpg';
import g3 from '/src/assets/gallery3.jpg';
import g4 from '/src/assets/gallery4.jpg';
import g5 from '/src/assets/gallery5.jpg';
import g6 from '/src/assets/gallery6.jpg';
import g7 from '/src/assets/gallery7.jpg';
import g8 from '/src/assets/gallery8.jpg';
import g9 from '/src/assets/gallery9.jpg';
import g10 from '/src/assets/gallery10.jpg';
import g11 from '/src/assets/gallery11.jpg';
import g12 from '/src/assets/gallery12.jpg';

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className={`gallery-item item-${(index % 10) + 1}`}>
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;