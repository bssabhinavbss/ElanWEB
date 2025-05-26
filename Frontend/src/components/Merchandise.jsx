import React from 'react';
import './Merchandise.css';
import shirt1 from '/src/assets/shirt1.jpeg';
import shirt2 from '/src/assets/shirt2.jpeg';
import shirt3 from '/src/assets/shirt3.jpeg';

const Merchandise = () => {
  return (
    <section className="merchandise-section">
      <div className="merch-title-container">
        <h2 className="merch-title">Merchandise</h2>
      </div>
      <div className="merch-gallery">
        <img src={shirt1} alt="Shirt 1" className="merch-shirt" />
        <img src={shirt2} alt="Shirt 2" className="merch-shirt" />
        <img src={shirt3} alt="Shirt 3" className="merch-shirt" />
      </div>
    </section>
  );
};

export default Merchandise;