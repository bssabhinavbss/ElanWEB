import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process or send data here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // reset after 3 sec
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Interact with us</h1>
      <p className="contact-sub">Reach out to us</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={`submit-button ${submitted ? 'sent' : ''}`}
        >
          {submitted ? 'Sent!' : 'Send!!!!'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;