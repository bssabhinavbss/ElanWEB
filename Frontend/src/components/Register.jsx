import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5500/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Registration failed.");
      }
    } catch (err) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">REGISTER TO ELAN & NVISION</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      ) : (
        <p className="register-success">
          Registration successful! Email has been sent to <strong>{formData.email}</strong>.
        </p>
      )}
    </div>
  );
};

export default Register;