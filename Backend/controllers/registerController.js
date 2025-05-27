const User = require('../models/User.js');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.registerUser = async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const user = new User({ name, phone, email });
    await user.save();

    // Send confirmation email
    const mailOptions = {
  from: `"Elan & nVision Team" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: 'Your Elan & nVision Registration is Confirmed ✅',
  text: `Hi ${name},

Thank you for registering for Elan & nVision!

We're thrilled to have you on board. Stay tuned for exciting updates about the event.

If you have any questions, feel free to reply to this email.

Warm regards,  
Team Elan & nVision
https://elan.org.in
`,
};

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: `Registration successful! Confirmation sent to ${email}` });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: 'This email is already registered.' });
    } else {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  }
};