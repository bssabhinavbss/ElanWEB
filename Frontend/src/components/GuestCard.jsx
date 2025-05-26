// src/components/GuestCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './GuestCard.css';

const GuestCard = ({ image, title, time, date }) => {
  return (
    <motion.div
      className="guest-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 1 }}
    >
      <img src={image} alt={title} className="guest-image" />
      <div className="guest-info">
        <h3>{title}</h3>
        <p>{time}</p>
        <p>{date}</p>
      </div>
    </motion.div>
  );
};

export default GuestCard;