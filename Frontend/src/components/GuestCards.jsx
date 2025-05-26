// src/components/GuestCards.jsx
import React from 'react';
import GuestCard from './Guestcard';
import './GuestCards.css';

import guest1 from '/src/assets/guest1.jpg';
import guest2 from '/src/assets/guest2.jpg';
import guest3 from '/src/assets/guest3.jpg';
import guest4 from '/src/assets/guest4.jpg';

const guests = [
  {
    image: guest1,
    title: 'Artist One',
    time: '8:00 PM',
    date: '17 October',
  },
  {
    image: guest2,
    title: 'Artist Two',
    time: '9:00 PM',
    date: '18 October',
  },
  {
    image: guest3,
    title: 'Performer Three',
    time: '7:30 PM',
    date: '19 October',
  },
  {
    image: guest4,
    title: 'Performer Four',
    time: '10:00 PM',
    date: '20 October',
  },
];

const GuestCards = () => {
  return (
    <div className="guest-cards-section">
      <h2 className="guest-cards-title">Guest Appearances</h2>
      <div className="guest-cards-container">
        {guests.map((guest, index) => (
          <GuestCard key={index} {...guest} />
        ))}
      </div>
    </div>
  );
};

export default GuestCards;